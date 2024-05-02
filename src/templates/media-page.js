import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import MediaCard from '@/components/Media/MediaCard'
import PageBuilder from '@/components/PageBuilder'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

const Media = ({ data }) => {
  const { mediaData, pageData } = data

  return (
    <Layout nav={true}>
      <PageBuilder blocks={pageData.frontmatter.blocks} />
      <Section
        settings={pageData?.settings}
        className="bg-white pb-16 pt-[7.063rem]"
      >
        <Container className="w-full">
          {mediaData && mediaData.edges.length > 0 && (
            <div className=" grid grid-cols-1 gap-x-6 gap-y-[5.563rem] md:grid-cols-2 xl:grid-cols-3">
              {mediaData.edges.map((data, index) => {
                return <MediaCard data={data} key={index} />
              })}
            </div>
          )}
        </Container>
      </Section>
    </Layout>
  )
}

Media.propTypes = {
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
                  content: PropTypes.string.isRequired,
                  url: PropTypes.string.isRequired,
                }),
              }),
            ),
          }),
        ),
      }).isRequired,
    }).isRequired,
    mediaData: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              excerpt: PropTypes.string,
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
  }).isRequired,
}

export const Head = ({ data }) => (
  <DefaultHead data={data?.pageData.frontmatter.seo}>
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Media

export const mediaPageQuery = graphql`
  query MediaPageQuery {
    pageData: markdownRemark(frontmatter: { id: { eq: "UKUHBNtTTC" } }) {
      frontmatter {
        id
        title
        ...Seo
        ...Blocks
      }
    }
    mediaData: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "media" } } }
    ) {
      edges {
        node {
          ...MediaData
        }
      }
    }
  }
`
