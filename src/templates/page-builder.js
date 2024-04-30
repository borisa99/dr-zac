import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'

const Page = ({ data }) => {
  return (
    <Layout nav={true}>
      <PageBuilder
        blocks={data.page.frontmatter.blocks}
        posts={data.postData.edges}
        videos={data.videoData.edges}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Page

export const Head = ({ data }) => (
  <DefaultHead data={data.page.frontmatter.seo}>
    <meta id="type" property="og:type" content="website" />
  </DefaultHead>
)

export const basicPageQuery = graphql`
  query BasicPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        id
        title
        ...Blocks
        ...Seo
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
    videoData: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "videos" } } }
    ) {
      edges {
        node {
          frontmatter {
            type
            id
            title
            excerpt
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
