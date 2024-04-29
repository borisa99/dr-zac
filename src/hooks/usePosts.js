import { useStaticQuery, graphql } from 'gatsby'

export const UsePosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
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
  `)

  return allMarkdownRemark
}
