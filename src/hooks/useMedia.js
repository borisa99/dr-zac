import { useStaticQuery, graphql } from 'gatsby'

export const useMedia = () => {
  const { allMarkdownRemark: media } = useStaticQuery(graphql`
    query MediaQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "media" } } }) {
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

  return media
}
