import { graphql } from 'gatsby'

export const authorFragment = graphql`
  fragment AuthorData on MarkdownRemark {
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
`
