const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const defs = `
  type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
  }
  
  type MarkdownRemarkFrontmatter {
    id: String
    title: String
    author: String
    tags: [String]
    thumbnail: File @fileByRelativePath @dontInfer
    seo: MarkdownRemarkFrontmatterSeo
    rows: [MarkdownRemarkFrontmatterRows]
    blocks: [Blocks] 
  }

  type MarkdownRemarkFrontmatterRows {
    position: String
    fields: [MarkdownRemarkFrontmatterRowsFields]
  }

  type MarkdownRemarkFrontmatterRowsFields {
    type: String
    input_type: String
    required: Boolean
    label: String
    autocomplete: String
    content: String
    value: String
    placeholder: String
    button: MarkdownRemarkFrontmatterRowsFieldsButton
  }

  type MarkdownRemarkFrontmatterRowsFieldsButton {
    variant: String
    content: String
    url: String
  }
  
  type Blocks  {
    type: String
    category: String
    decoration: String
    photo: Photo
    permalink: String
    settings: Settings
    posts: [MarkdownRemark] @link(by: "frontmatter.id")
    media: [MarkdownRemark] @link(by: "frontmatter.id")
    videos: [MarkdownRemark] @link(by: "frontmatter.id")
  }

  type Settings {
    variant: String
    padding_top: String
    padding_bottom: String
    margin_top: String
    margin_bottom: String
  }

  type Photo @dontInfer  {
    image: File @fileByRelativePath
    alt: String
  }

  type MarkdownRemarkFrontmatterSeo {
    title: String
    description: String
    ogimage: File @fileByRelativePath
  }`
  createTypes(defs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 3000
        filter: { frontmatter: { layout: { nin: ["hidden", null] } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              id
              layout
              permalink
              type
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.log('errors', results.errors)
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      let layout = edge.node.frontmatter.layout
      const excludes = [null, 'hidden', 'Category']
      return excludes.indexOf(layout) === -1 ? true : false
    })

    postOrPage.forEach((edge) => {
      const id = edge.node.id
      let pathName = edge.node.frontmatter.permalink || edge.node.fields.slug
      let component = path.resolve(
        `src/templates/${String(edge.node.frontmatter.layout)}.js`,
      )

      if (fs.existsSync(component)) {
        createPage({
          path: pathName,
          component,
          context: {
            id,
          },
        })
      }
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  if (page.path !== oldPage.path) {
    deletePage(oldPage)
    createPage(page)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  })
}

// gatsby-node.js
exports.onPostBuild = async ({ graphql }) => {
  const result = await graphql(`
    query PostsQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              id
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
        }
      }
    }
  `)
  if (result.errors) {
    console.error('Error fetching posts:', result.errors)
    throw new Error(result.errors)
  }
  const posts = result.data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.frontmatter.id,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    excerpt: node.frontmatter.excerpt,
    thumbnail: node.frontmatter.thumbnail,
    tags: node.frontmatter.tags,
    author: node.frontmatter.author,
  }))

  fs.writeFileSync('./static/posts.json', JSON.stringify(posts))

  // Fetch media
  const mediaResult = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "media" } } }) {
        edges {
          node {
            id
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
    }
  `)

  if (mediaResult.errors) {
    throw new Error('Error fetching media data')
  }

  const media = mediaResult.data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.frontmatter.id,
    title: node.frontmatter.title,
    permalink: node.frontmatter.permalink,
    excerpt: node.frontmatter.excerpt,
    thumbnail: node.frontmatter.thumbnail,
  }))

  // Write media data to a JSON file
  fs.writeFileSync('./static/media.json', JSON.stringify(media))

  // Fetch videos
  const videoResult = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "videos" } } }) {
        edges {
          node {
            id
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
        }
      }
    }
  `)

  if (videoResult.errors) {
    throw new Error('Error fetching video data')
  }

  const videos = videoResult.data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.frontmatter.id,
    title: node.frontmatter.title,
    permalink: node.frontmatter.permalink,
    excerpt: node.frontmatter.excerpt,
    thumbnail: node.frontmatter.thumbnail,
  }))

  // Write video data to a JSON file
  fs.writeFileSync('./static/videos.json', JSON.stringify(videos))

  // Fetch authors
  const authorResults = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
        edges {
          node {
            id
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
        }
      }
    }
  `)

  if (authorResults.errors) {
    throw new Error('Error fetching author data')
  }

  const authors = authorResults.data.allMarkdownRemark.edges.map(
    ({ node }) => ({
      id: node.frontmatter.id,
      title: node.frontmatter.title,
      title: node.frontmatter.title,
      thumbnail: node.frontmatter.thumbnail,
    }),
  )

  // Write video data to a JSON file
  fs.writeFileSync('./static/authors.json', JSON.stringify(authors))
}
