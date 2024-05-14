import { useStaticQuery, graphql } from 'gatsby'

export const useCategoryArticles = (category, promoted) => {
  const {
    allMarkdownRemark: { group: items },
  } = useStaticQuery(graphql`
    query CategoryArticlesQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "article" } } }
      ) {
        group(
          field: {
            frontmatter: { categories: { frontmatter: { id: SELECT } } }
          }
          limit: 4
        ) {
          fieldValue
          edges {
            node {
              ...ArticleCard
            }
          }
        }
      }
    }
  `)

  const result = items.find((i) => i.fieldValue === category)?.edges

  return promoted ? result : result.slice(0, 3)
}
