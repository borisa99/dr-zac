export const filterPosts = (data) => {
  if (!data.allPosts) return []
  return (
    data.allPosts.filter((post) => {
      const tags = post.tags ? post?.tags : post?.node.frontmatter.tags
      return tags.includes(data.category.toUpperCase())
    }) || []
  )
}

export const getDate = (data) => {
  return (
    data?.date ??
    data?.frontmatter?.date ??
    data?.post?.frontmatter.date ??
    data?.node?.frontmatter.date
  )
}
