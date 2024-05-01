import { useStaticQuery, graphql } from 'gatsby'

export const useVideos = () => {
  const {
    allMarkdownRemark: { edges: videos },
  } = useStaticQuery(graphql`
    query VideosQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "videos" } } }) {
        edges {
          node {
            frontmatter {
              type
              title
              permalink
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
  `)

  return videos
}
