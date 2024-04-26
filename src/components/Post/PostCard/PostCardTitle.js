import React from 'react'
import Title from '@/components/UI/Title'

export default function PostCardTitle({ variant, data }) {
  const { node } = data
  return (
    <Title
      variant={variant ? 'article' : 'article-variant'}
      children={node.frontmatter.title}
    />
  )
}
