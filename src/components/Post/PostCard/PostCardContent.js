import React, { useMemo } from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function PostCardContent({ variant, data }) {
  const text = useMemo(
    () =>
      data?.node.frontmatter?.excerpt?.length < 100
        ? data?.node.frontmatter?.excerpt
        : data?.node.frontmatter?.excerpt?.slice(0, 100) + '...',
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
