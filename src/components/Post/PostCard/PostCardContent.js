import React, { useMemo } from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function PostCardContent({ variant, data }) {
  const { node } = data
  const text = useMemo(
    () =>
      node?.excerpt?.length < 100
        ? node?.excerpt
        : node?.excerpt?.slice(0, 100) + '...',
    [node]
  )

  return (
    <Paragraph
      variant={variant ? 'article' : 'article-variant'}
      children={text}
      className="mb-3"
    />
  )
}
