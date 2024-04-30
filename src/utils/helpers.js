export const filterPosts = (posts, category) => {
  return posts.filter((post) => {
    const tags = post.node.frontmatter.tags || []
    return tags.includes(category.toUpperCase())
  })
}
