import { useStaticQuery, graphql } from 'gatsby'

export const useVideos = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query VideosQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "videos" } } }) {
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
  `)

  return edges
}
