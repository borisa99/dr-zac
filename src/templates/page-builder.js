import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'

const Page = ({ data }) => {
  const blocksUpdated = data.page.frontmatter.blocks.map((block) => {
    if (block.type === 'blog') {
      return {
        ...block,
        authors: data.authorData.edges,
      }
    }

    return block
  })

  return (
    <Layout nav={true}>
      <PageBuilder blocks={blocksUpdated} />
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
    authorData: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "author" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          ...AuthorData
        }
      }
    }
  }
`
