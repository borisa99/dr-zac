import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import CategoryLink from '../components/Post/CategoryLink'
import PostList from '../components/Post/PostList'
import Image from '../resolvers/Image'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PostAuthor from '@/components/Post/PostAuthor'
// import PostRecentBlock from '@/components/Post/PostRecentBlock'
import Container from '@/components/UI/Container'
import Title from '@/components/UI/Title'

const Post = ({ data }) => {
  const { html, frontmatter: post } = data.post

  return (
    <Layout nav={true}>
      <article className="pt-[10.5rem]">
        <header>
          <Container>
            <div className="mx-auto mb-10 w-full max-w-3xl xl:mb-20">
              <div className="flex flex-wrap gap-2">
                {post.categories && (
                  <>
                    {post.categories.map((cat, i) => {
                      return <CategoryLink key={i} category={cat} />
                    })}
                  </>
                )}
              </div>
              <Title Tag="h1" variant="xl" className="mt-5 text-balance">
                {post.title}
              </Title>
              <PostAuthor
                className="mt-10"
                author={post.author.frontmatter}
                item={post}
              />
            </div>
            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                fill="true"
                className="mb-10 aspect-[1.49] rounded-xl xl:mb-20"
              />
            )}
          </Container>
        </header>
        <Container>
          <main
            className="prose mx-auto mb-14 max-w-3xl text-lg leading-loose lg:text-xl lg:leading-loose xl:mb-40"
            dangerouslySetInnerHTML={{ __html: html }}
          ></main>
          {/* <PostRecentBlock authors={data.authorData.edges} /> */}
        </Container>
        <Container>
          <PostList posts={data.articles.edges} />
        </Container>
      </article>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.post.frontmatter.seo}>
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Post

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        categories {
          frontmatter {
            name
            permalink
          }
        }
        date(formatString: "MMMM DD, YYYY")
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
        ...Author
        ...Seo
      }
    }
    articles: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "article" }, id: { ne: $id } } }
      limit: 3
    ) {
      edges {
        node {
          ...ArticleCard
        }
      }
    }
  }
`
