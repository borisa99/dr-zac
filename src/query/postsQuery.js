import { graphql } from 'gatsby'

export const postsFragment = graphql`
  fragment PostData on MarkdownRemark {
    frontmatter {
      excerpt
      title
      date(formatString: "MMMM DD, YYYY")
      author
      tags
      thumbnail {
        childImageSharp {
          gatsbyImageData(
            width: 690
            quality: 72
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
