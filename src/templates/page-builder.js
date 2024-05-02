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
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          ...PostData
        }
      }
    }
    videoData: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "videos" } } }
    ) {
      edges {
        node {
          ...VideoData
        }
      }
    }
  }
`
