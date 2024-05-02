import { graphql } from 'gatsby'

export const videoFragment = graphql`
  fragment VideoData on MarkdownRemark {
    frontmatter {
      type
      id
      title
      excerpt
      permalink
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
