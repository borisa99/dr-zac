import React from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function HeadingContent({ data }) {
  return (
    <>
      {data?.content && (
        <Paragraph className="mx-auto mb-8 w-full">{data?.content}</Paragraph>
      )}
    </>
  )
}
