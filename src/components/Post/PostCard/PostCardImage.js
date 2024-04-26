import React from 'react'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function PostCardImage({ variant, data }) {
  const { node } = data

  return (
    <div
      className={cn(
        {
          'h-[25rem] w-[37.5rem] rounded-[1.25rem] ': variant,
        },
        {
          'h-[16.375rem] w-[24.5rem] rounded-xl ': !variant,
        },
      )}
    >
      <Image
        fill="true"
        src={node.frontmatter?.thumbnail}
        className="rounded-[1.25rem] object-cover"
      />
    </div>
  )
}
