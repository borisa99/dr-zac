import React from 'react'
import { cn } from '../../lib/helper'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'
import VideoPlayer from '@/components/Video/VideoPlayer'

export default function VideoCard({ data, variant = 'video' }) {
  return (
    <div>
      <div className="aspect-video w-full">
        <VideoPlayer data={data} />
      </div>
      <Title
        Tag="h3"
        variant="article-variant"
        children={data?.title ? data.title : data.frontmatter.title}
        className={cn('mb- mb-1 mt-6', {
          'text-center': variant === 'video',
        })}
      />
      {(data?.excerpt || data.frontmatter.excerpt) && (
        <Paragraph
          variant="article-variant"
          children={data?.excerpt ? data.excerpt : data.frontmatter.excerpt}
          className="text-center"
        />
      )}
    </div>
  )
}
