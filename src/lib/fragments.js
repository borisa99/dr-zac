import { graphql } from 'gatsby'

export const articleCardFragment = graphql`
  fragment ArticleCard on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      categories {
        frontmatter {
          name
        }
      }
      permalink
      excerpt
      thumbnail {
        childImageSharp {
          gatsbyImageData(
            width: 690
            quality: 72
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      ...Author
    }
  }
`

export const authorFragment = graphql`
  fragment Author on MarkdownRemarkFrontmatter {
    author {
      frontmatter {
        name
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 80
              quality: 72
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export const seoFragment = graphql`
  fragment Seo on MarkdownRemarkFrontmatter {
    seo {
      title
      description
      ogimage {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            quality: 100
            formats: [AUTO]
            placeholder: NONE
          )
        }
      }
    }
  }
`
