import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import VideoCard from '@/components/Video/VideoCard'

const Videos = ({ data }) => {
  const { videoData, pageData } = data

  return (
    <Layout nav={true}>
      <PageBuilder blocks={pageData?.frontmatter.blocks} />
      <Section
        settings={pageData?.settings}
        className="bg-white pb-16 xl:pt-[7.063rem]"
      >
        <Container className="w-full">
          {videoData?.edges.length > 0 && (
            <div className="grid grid-cols-1 gap-x-6 gap-y-[5.563rem] lg:grid-cols-2 xl:grid-cols-3">
              {videoData?.edges.map((videoData, index) => {
                return <VideoCard data={videoData} key={index} />
              })}
            </div>
          )}
        </Container>
      </Section>
    </Layout>
  )
}

Videos.propTypes = {
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
    videoData: PropTypes.shape({
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
