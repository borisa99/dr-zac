import React from 'react'
import Image from '@/resolvers/Image'

export default function MediaCardImage({ data }) {
  console.log(data)

  return (
    <div className="relative h-[16.375rem] w-[24.5rem] rounded-xl">
      <Image
        src={data.node.frontmatter.thumbnail}
        alt={data.node.frontmatter.title}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  )
}
