import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'

const Videos = ({ data }) => {
  const { pageData } = data

  return (
    <Layout nav={true}>
      <PageBuilder blocks={pageData?.frontmatter.blocks} />
    </Layout>
  )
}

Videos.propTypes = {
  data: PropTypes.shape({
    pageData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        seo: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
        blocks: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
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
  }).isRequired,
}

export const Head = ({ data }) => (
  <DefaultHead data={data?.pageData.frontmatter.seo}>
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Videos

export const videoPageQuery = graphql`
  query VideoPageQuery {
    pageData: markdownRemark(frontmatter: { id: { eq: "UDUJKHVbWC" } }) {
      frontmatter {
        id
        title
        ...Seo
        ...Blocks
      }
    }
  }
`
