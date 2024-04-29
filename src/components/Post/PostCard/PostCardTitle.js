import React from 'react'
import Title from '@/components/UI/Title'

export default function PostCardTitle({ variant, data }) {
  return (
    <Title
      variant={variant ? 'article' : 'article-variant'}
      children={data.frontmatter.title}
      className="title-font"
    />
  )
}
