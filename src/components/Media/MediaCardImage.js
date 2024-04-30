import React from 'react'
import Image from '@/resolvers/Image'

export default function MediaCardImage({ data }) {
  return (
    <div className="relative h-[16.375rem] w-full max-w-[24.rem] rounded-xl xl:w-[24.5rem]">
      <Image
        src={data.node.frontmatter.thumbnail}
        alt={data.node.frontmatter.title}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  )
}
