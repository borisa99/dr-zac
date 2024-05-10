import React from 'react'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function PostCardImage({ variant, data }) {
  const previewSrc =
    data?.thumbnail?.childImageSharp?.gatsbyImageData?.images.fallback.src

  const frontSrc =
    data?.node?.frontmatter.thumbnail ?? data?.frontmatter?.thumbnail

  return (
    <div
      className={cn(
        {
          ' h-[25rem] w-full max-w-[37.5rem] rounded-[1.25rem] xl:w-[37.5rem]':
            variant,
        },
        {
          ' h-[16.375rem] w-full max-w-[24.5rem] rounded-xl xl:w-[24.5rem]':
            !variant,
        },
      )}
    >
      <Image
        fill="true"
        src={frontSrc ?? previewSrc}
        className="rounded-[1.25rem] object-cover "
      />
    </div>
  )
}
