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
            ...PostData
          }
        }
      }
    }
  `)
  return posts
}
