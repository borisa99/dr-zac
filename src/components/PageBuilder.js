import React from 'react'
import Articles from '@/blocks/Articles'
import Columns from '@/blocks/Columns'
import Content from '@/blocks/Content'
import ContentImage from '@/blocks/ContentImage'
import Hero from '@/blocks/Hero'
import Media from '@/blocks/Media'
import TitleBlock from '@/blocks/TitleBlock'
import Video from '@/blocks/Video'
import { LocationProvider } from '@reach/router'
import { graphql } from 'gatsby'
import CategorySelector from '../blocks/CategorySelector'
import RecentArticles from '../blocks/RecentArticles'

export default function PageBuilder({ blocks, preview = false }) {
  return (
    <main>
      <LocationProvider>
        {blocks &&
          blocks.map((block, i) => {
            switch (block.type) {
              case 'hero':
                return <Hero key={i} data={block} preview={preview} />
              case 'title':
                return <TitleBlock key={i} data={block} preview={preview} />
              case 'category_articles':
                return <Articles key={i} data={block} preview={preview} />
              case 'category_selector':
                return (
                  <CategorySelector key={i} data={block} preview={preview} />
                )
              case 'recent_articles':
                return <RecentArticles key={i} data={block} preview={preview} />
              case 'content_image':
                return <ContentImage key={i} data={block} preview={preview} />
              case 'video':
                return <Video key={i} data={block} preview={preview} />
              case 'media':
                return <Media key={i} data={block} preview={preview} />
              case 'columns':
                return <Columns key={i} data={block} preview={preview} />
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
    </main>
  )
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      content
      decoration
      permalink
      relation
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
      buttons {
        button {
          content
          url
          variant
        }
      }

      variant
      alignment
      settings {
        variant
        padding_top
        padding_bottom
        margin_top
        margin_bottom
      }
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
    }
  }
`
