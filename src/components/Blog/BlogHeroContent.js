import React from 'react'
import Paragraph from '@/components/UI/Paragraph'

//homepage
//blog-1
//blog-2

export default function BlogHeroContent({ data }) {
  return (
    <>
      <Paragraph
        variant="article"
        children={data?.content}
        className="mb-[4.125rem]"
      />
    </>
  )
}