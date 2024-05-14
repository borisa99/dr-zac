import React from 'react'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

const PostAuthor = ({ author, item, preview, ...props }) => {
  const { className } = props
  return (
    <div className={cn('flex items-start gap-3', className)}>
      {author.thumbnail && (
        <Image
          src={author.thumbnail}
          className="h-12 w-12 overflow-hidden rounded-full"
        />
      )}
      <div className="text-sm leading-5">
        <p className="mb-0.5 font-semibold text-black">{author.name}</p>
        <p className="text-gray-500">{item.date}</p>
      </div>
    </div>
  )
}

export default PostAuthor
