import { useStaticQuery, graphql } from 'gatsby'

export const useAuthors = () => {
  const {
    allMarkdownRemark: { edges: authors },
  } = useStaticQuery(graphql`
    query AuthorsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
        edges {
          node {
            frontmatter {
              type
              id
              title
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

  const getAuthor = (data) => {
    if (!data) return

    const postID =
      data?.node?.frontmatter.author ?? data.post.frontmatter.author
    const author = authors.find((val) => {
      const aut = val.node.frontmatter
      return postID === aut.id
    })

    return author.node.frontmatter || {}
  }

  return getAuthor
}
