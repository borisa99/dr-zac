import React from 'react'
import Paragraph from '@/components/UI/Paragraph'

export default function ContentImageContent({ data }) {
  return (
    <>
      <Paragraph
        variant="default"
        children={data?.content}
        className="w-full"
      />
    </>
  )
}
