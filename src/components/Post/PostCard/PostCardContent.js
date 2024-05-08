import React, { useMemo } from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function PostCardContent({ variant, data }) {
  const text = useMemo(() => {
    const dataExcerpt =
      data?.node?.frontmatter.excerpt ??
      data?.frontmatter?.excerpt ??
      data?.excerpt

    return dataExcerpt
  }, [data])

  return (
    <>
      {text !== 'undefined...' ? (
        <Paragraph
          variant={variant ? 'article' : 'article-variant'}
          children={text}
          className="mb-3"
        />
      ) : null}
    </>
  )
}
