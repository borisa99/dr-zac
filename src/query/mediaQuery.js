import { graphql } from 'gatsby'

export const mediaFragment = graphql`
  fragment MediaData on MarkdownRemark {
    frontmatter {
      id
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
`
