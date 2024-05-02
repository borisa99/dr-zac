import React, { useEffect, useMemo, useState } from 'react'
import { filterPosts } from '@/utils/helpers'
import { useLocation } from '@reach/router'
import { graphql, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import BlogHeroContent from '@/components/Blog/BlogHeroContent'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'
import PostList from '@/components/Post/PostList'
import Button from '@/components/UI/Button'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Spinner from '@/components/UI/Spinner'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'

const postCategories = [
  { title: 'Medical', category: 'medical' },
  { title: 'Aesthetics', category: 'aesthetics' },
  { title: 'Diet & Exercise', category: 'diet & exercise' },
  { title: 'Lifestyle', category: 'lifestyle' },
]

const Blog = ({ data }) => {
  const { postData, pageData } = data
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const [categoryFilter, setCategoryFilter] = useState('load')

  const handleCategoryChange = (category, event) => {
    event.preventDefault()
    const encodedCategory = encodeURIComponent(category)
    navigate(`/blog?cat=${encodedCategory}`)
  }

  useEffect(() => {
    const catFilter = queryParams.get('cat')
    setCategoryFilter(catFilter)
    return () => {
      setCategoryFilter('load')
    }
  }, [queryParams])

  return (
    <Layout nav={true}>
      <PageBuilder blocks={pageData.frontmatter.blocks} />
      <Section settings={pageData?.settings} className="bg-white pb-40 pt-28">
        <Container>
          {categoryFilter === 'load' ? (
            <Spinner />
          ) : (
            postCategories.map(({ title, category }, index) => {
              const filteredPosts = filterPosts(postData?.edges, title)

              if (categoryFilter && category !== categoryFilter) return

              return (
                <div key={index} className="mb-40">
                  <div
                    className={`mb-4 flex w-full flex-col justify-center xl:flex-row xl:items-end  ${categoryFilter ? 'xl:justify-center' : 'xl:justify-between'}`}
                  >
                    <Title
                      variant="article"
                      children={title}
                      className="title-font text-center text-[2.2rem] xl:text-[3rem]"
                    />
                    {!categoryFilter ? (
                      <Button
                        onClick={(e) => handleCategoryChange(category, e)}
                        className={cn('hidden xl:inline-block')}
                        children={`View all ${title} articles`}
                      />
                    ) : null}
                  </div>
                  {!categoryFilter ? (
                    <BlogHeroContent
                      data={{
                        content: `Got any ${title.toLowerCase()} questions or concerns? Dr. Zac's got your back.`,
                      }}
                    />
                  ) : null}

                  <PostList
                    categoryFilter={categoryFilter}
                    isVariant={index === 0}
                    posts={filteredPosts}
                  />
                </div>
              )
            })
          )}
        </Container>
      </Section>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    pageData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        seo: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
        blocks: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            variant: PropTypes.string,
            buttons: PropTypes.arrayOf(
              PropTypes.shape({
                button: PropTypes.shape({
                  variant: PropTypes.string,
                  content: PropTypes.string,
                  url: PropTypes.string,
                }),
              }),
            ),
          }),
        ),
      }).isRequired,
    }).isRequired,
    postData: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              excerpt: PropTypes.string,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string,
              tags: PropTypes.arrayOf(PropTypes.string),
              thumbnail: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  gatsbyImageData: PropTypes.object.isRequired,
                }),
              }),
            }),
          }),
        }),
      ).isRequired,
    }).isRequired,
    authorData: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              thumbnail: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  gatsbyImageData: PropTypes.object.isRequired,
                }),
              }),
            }),
          }),
        }),
      ).isRequired,
    }),
  }).isRequired,
}

export const Head = ({ data }) => (
  <DefaultHead data={data?.pageData.frontmatter.seo}>
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Blog

export const blogPageQuery = graphql`
  query BlogPageQuery {
    pageData: markdownRemark(
      frontmatter: { id: { eq: "cf54cef7-dddb-48cc-835e-ce80ed5f9122" } }
    ) {
      frontmatter {
        title
        seo {
          title
          description
        }
        blocks {
          type
          title
          content
          variant
          buttons {
            button {
              variant
              content
              url
            }
          }
        }
      }
    }
    postData: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            excerpt
            title
            date(formatString: "MMMM DD, YYYY")
            author
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 690
                  quality: 72
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    authorData: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "author" } } }
    ) {
      edges {
        node {
          frontmatter {
            type
            id
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  quality: 71
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
