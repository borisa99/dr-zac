import React from 'react'
import Title from '@/components/UI/Title'

export default function PostCardTitle({ variant, data }) {
  const title =
    data?.title ?? data?.frontmatter?.title ?? data?.node.frontmatter.title

  return (
    <Title
      variant={variant ? 'article' : 'article-variant'}
      children={title}
      className="title-font"
    />
  )
}
