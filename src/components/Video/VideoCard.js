import React from 'react'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'
import VideoPlayer from '@/components/Video/VideoPlayer'

export default function VideoCard({ data }) {
  return (
    <div>
      <div className="h-[16.375rem] w-[24.5rem] ">
        <VideoPlayer data={data} />
      </div>
      <Title
        Tag="h3"
        variant="article-variant"
        children={data.node.frontmatter.title}
        className="mb- mb-1 mt-6 text-center"
      />
      <Paragraph
        variant="article-variant"
        children={data.node.frontmatter.excerpt}
        className="text-center"
      />
    </div>
  )
}
