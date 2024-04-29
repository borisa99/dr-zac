import { useStaticQuery, graphql } from 'gatsby'

export const usePosts = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "post" } } }
        limit: 4
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              excerpt
              title
              date(formatString: "MMMM DD, YYYY")
              author
              tags
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    width: 690
                    quality: 72
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
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
  return posts
}
