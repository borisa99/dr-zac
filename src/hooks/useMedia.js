import { useStaticQuery, graphql } from 'gatsby'

export const useMedia = () => {
  const { allMarkdownRemark: media } = useStaticQuery(graphql`
    query MediaQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "media" } } }) {
        edges {
          node {
            ...MediaData
          }
        }
      }
    }
  `)

  return media
}
