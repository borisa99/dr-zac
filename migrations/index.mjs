import fs from 'fs'
import yaml from 'js-yaml'
import fetch from 'node-fetch'
import { NodeHtmlMarkdown } from 'node-html-markdown'
import path from 'path'
import slugify from 'slugify'

const siteUrl = 'https://doctorzac.com'

const fetchArticles = async () => {
  fs.mkdirSync('../content/blog', { recursive: true })
  fs.mkdirSync('../static/img', { recursive: true })
  const response = await fetch(`${siteUrl}/wp-json/wp/v2/posts`)
  const data = await response.json()
  for (let post of data) {
    let result = {
      id: post.id,
      type: 'article',
      layout: 'post',
      title: post.title.rendered,
      date: post.date,
      slug: `/blog/${slugify(post.slug)}/`,
      excerpt: NodeHtmlMarkdown.translate(post.excerpt.rendered),
      categories: post.categories,
      author: post.author,
      seo: {
        title: post.yoast_head_json.title,
        description: post.yoast_head_json.og_description,
      },
    }
    console.log('Creating card:', result.title, '... \n')

    const imgData = await fetch(post?._links['wp:featuredmedia']?.[0]?.href)
    const img = await imgData.json()
    const imageResponse = await fetch(img?.guid?.rendered)
    const imageExt = path.extname(new URL(img?.guid?.rendered).pathname)
    const dest = fs.createWriteStream(
      `../static/img/${slugify(img.title.rendered, { lower: true })}.${imageExt}`,
    )
    imageResponse.body.pipe(dest)

    result.thumbnail = `/img/${slugify(img.title.rendered, { lower: true })}.${imageExt}`

    const filename = slugify(result.title, { lower: true })
    // const imageExt = path.extname(new URL(card.image).pathname)
    // const imageResponse = await fetch(card.image)
    // const dest = fs.createWriteStream(
    //   `../static/img/cards/${filename}.${imageExt}`,
    // )
    // imageResponse.body.pipe(dest)
    // card.description = NodeHtmlMarkdown.translate(card.description)
    // card.note = NodeHtmlMarkdown.translate(card.note)

    let content = '---\n'
    content += yaml.dump(result)
    content += '---\n'
    content += NodeHtmlMarkdown.translate(post.content.rendered)
    fs.writeFileSync(`../content/blog/${filename}.md`, content)
  }
}

fetchArticles()

const fetchCategories = async () => {
  const response = await fetch(`${siteUrl}/wp-json/wp/v2/categories`)
  const data = await response.json()

  fs.mkdirSync('../content/categories', { recursive: true })

  for (let category of data) {
    console.log('Creating category:', category.name, '... \n')
    category = {
      id: category.id,
      type: 'category',
      name: category.name,
      slug: category.slug,
    }

    let content = '---\n'
    content += yaml.dump(category)
    content += '---\n'

    fs.writeFileSync(
      `../content/categories/${slugify(category.name, { lower: true })}.md`,
      content,
    )
  }
}

// const fetchCards = async () => {
//   const response = await fetch('https://doctorzac.com/wp-json/wp/v2/posts')
//   const data = await response.json()

//   fs.mkdirSync('../content/blog', { recursive: true })
//   fs.mkdirSync('../static/img', { recursive: true })

//   for (let card of data) {
//     console.log('Creating card:', card.name, '... \n')
//     const imageExt = path.extname(new URL(card.image).pathname)
//     const filename = slugify(card.name, { lower: true })

//     const imageResponse = await fetch(card.image)
//     const dest = fs.createWriteStream(
//       `../static/img/cards/${filename}.${imageExt}`,
//     )
//     imageResponse.body.pipe(dest)

//     card.description = NodeHtmlMarkdown.translate(card.description)
//     card.note = NodeHtmlMarkdown.translate(card.note)
//     card.image = `/img/cards/${filename}.${imageExt}`
//     card = {
//       type: 'card',
//       ...card,
//     }

//     let content = '---\n'
//     content += yaml.dump(card)
//     content += '---\n'

//     fs.writeFileSync(`../content/cards/${filename}.md`, content)
//   }
// }
// fetchCards()
