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
      }
    }

    return block
  })

  return (
    <Layout nav={true} header={data?.page?.frontmatter?.header || 'default'}>
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
      frontmatter {
        id
        title
        header
        ...Blocks
        ...Seo
      }
    }
  }
`
