import { useStaticQuery, graphql } from 'gatsby'

export const useCategoryArticles = (category) => {
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
            frontmatter: { categories: { frontmatter: { name: SELECT } } }
          }
          limit: 3
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

  return items
}
