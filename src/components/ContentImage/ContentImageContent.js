import React from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function ContentImageContent({ data }) {
  return (
    <>
      {data?.content && (
        <Paragraph className="w-full">{data?.content}</Paragraph>
      )}
    </>
  )
}
