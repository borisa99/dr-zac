import React from 'react'
import Title from '@/components/UI/Title'

export default function VideoTitle({ data }) {
  return (
    <>
      {data?.title && (
        <Title
          Tag="h3"
          variant="article-variant"
          className="mb-3"
          children={data?.title}
        />
      )}
    </>
  )
}
