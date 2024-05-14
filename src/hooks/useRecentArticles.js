import { useStaticQuery, graphql } from 'gatsby'

export const useRecentArticles = (promoted = false) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query RecentArticlesQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "article" } } }
        limit: 4
      ) {
        edges {
          node {
            ...ArticleCard
          }
        }
      }
    }
  `)
  return promoted ? posts : posts.slice(0, 3)
}
