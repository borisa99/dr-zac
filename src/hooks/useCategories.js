import { useStaticQuery, graphql } from 'gatsby'

export const useCategories = () => {
  const {
    allMarkdownRemark: { edges: categories },
  } = useStaticQuery(graphql`
    query CategoriesQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "category" } } }
        limit: 4
      ) {
        edges {
          node {
            frontmatter {
              name
              permalink
            }
          }
        }
      }
    }
  `)
  return categories
}
