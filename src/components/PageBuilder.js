import React from 'react'
import Blog from '@/blocks/Blog'
import Content from '@/blocks/Content'
import ContentImage from '@/blocks/ContentImage'
import Heading from '@/blocks/Heading'
import Hero from '@/blocks/Hero'
import Media from '@/blocks/Media'
import Perks from '@/blocks/Perks'
import Video from '@/blocks/Video'
import { LocationProvider } from '@reach/router'
import { graphql } from 'gatsby'

export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      <LocationProvider>
        {blocks &&
          blocks.map((block, i) => {
            switch (block.type) {
              case 'hero':
                return <Hero key={i} data={block} />
              case 'heading':
                return <Heading key={i} data={block} preview={preview} />
              case 'blog':
                return <Blog key={i} data={block} preview={preview} />
              case 'content_image':
                return <ContentImage key={i} data={block} preview={preview} />
              case 'video':
                return <Video key={i} data={block} preview={preview} />
              case 'media':
                return <Media key={i} data={block} preview={preview} />
              case 'perks':
                return <Perks key={i} data={block} preview={preview} />
              case 'content':
                return <Content key={i} data={block} preview={preview} />
              default:
                return (
                  <div className="container mx-auto">
                    <div className="text-center">
                      Missing Section {block.type}
                    </div>
                  </div>
                )
            }
          })}
      </LocationProvider>
    </>
  )
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      category
      content
      videos {
        fields {
          slug
        }
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
      media {
        fields {
          slug
        }
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
      posts {
        fields {
          slug
        }
        frontmatter {
          id
          title
          excerpt
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
      permalink
      columns {
        title
        content
        photo {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          alt
        }
      }
      photo {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 72
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        alt
      }
      photo2 {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 72
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        alt
      }
      variant
      buttons {
        button {
          content
          url
          variant
        }
      }
      settings {
        variant
        padding_top
        padding_bottom
        margin_top
        margin_bottom
      }
    }
  }
`
