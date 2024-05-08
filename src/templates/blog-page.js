import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'

const Blog = ({ data }) => {
  const { authorData, pageData, postData } = data

  const blocksUpdated = pageData.frontmatter.blocks.map((block) => {
    if (block.type === 'blog') {
      return {
        ...block,
        allPosts: postData.edges,
        authors: authorData.edges,
      }
    } else return block
  })

  return (
    <Layout nav={true}>
      <PageBuilder blocks={blocksUpdated} />
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
            category: PropTypes.string,
            content: PropTypes.string,
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
          category
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
