import fs from 'fs'
import yaml from 'js-yaml'
import fetch from 'node-fetch'
import { NodeHtmlMarkdown } from 'node-html-markdown'
import path from 'path'
import slugify from 'slugify'
import { addRedirect } from './lib/utlis.mjs'

const siteUrl = 'https://doctorzac.com'

const fetchArticles = async () => {
  fs.mkdirSync('../content/blog', { recursive: true })
  fs.mkdirSync('../static/img', { recursive: true })
  const response = await fetch(`${siteUrl}/wp-json/wp/v2/posts?per_page=100`)
  const data = await response.json()
  for (let post of data) {
    let result = {
      id: post.id,
      type: 'article',
      layout: 'post',
      thumbnail: '',
      title: post.title.rendered,
      date: post.date,
      permalink: `/blog/${slugify(post.slug)}/`,
      excerpt: NodeHtmlMarkdown.translate(post.excerpt.rendered),
      categories: post.categories,
      author: post.author,
      seo: {
        title: post.yoast_head_json.title,
        description: post.yoast_head_json.og_description,
      },
    }
    console.log('Creating post:', result.title, '... \n')

    if (post?._links['wp:featuredmedia']?.[0]?.href) {
      const imgPath = await fetchImage(
        post?._links['wp:featuredmedia']?.[0]?.href,
      )
      result.thumbnail = imgPath
      result.seo.ogimage = imgPath
    }

    const filename = slugify(result.title, { lower: true })
    let content = '---\n'
    content += yaml.dump(result)
    content += '---\n'
    content += NodeHtmlMarkdown.translate(post.content.rendered)
    addRedirect(post.link, `${siteUrl}${result.permalink}`, 301)
    fs.writeFileSync(`../content/blog/${filename}.md`, content)
  }
}

const fetchImage = async (url) => {
  const imgData = await fetch(url)
  const img = await imgData.json()
  const filename = `${slugify(img.title.rendered, { lower: true })}${path.extname(new URL(img?.guid?.rendered).pathname)}`

  if (fs.existsSync(`../static/img/${filename}`)) {
    console.log('Image already exists:', filename, '... \n')
    return `/img/${filename}`
  }

  const imageResponse = await fetch(img?.guid?.rendered)
  const dest = fs.createWriteStream(`../static/img/${filename}`)
  imageResponse.body.pipe(dest)

  return `/img/${filename}`
}

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
      permalink: `/blog/category/${category.slug}/`,
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

fetchCategories()
