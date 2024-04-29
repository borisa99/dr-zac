import React, { useMemo } from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function PostCardContent({ variant, data }) {
  const text = useMemo(
    () =>
      data.frontmatter?.excerpt?.length < 100
        ? data.frontmatter?.excerpt
        : data.frontmatter?.excerpt?.slice(0, 100) + '...',
    [data],
  )

  return (
    <Paragraph
      variant={variant ? 'article' : 'article-variant'}
      children={text}
      className="mb-3"
    />
  )
}
