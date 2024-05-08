import React from 'react'
import Image from '@/resolvers/Image'

export default function MediaCardImage({ data }) {
  const imageSrc = data.thumbnail
    ? data.thumbnail.childImageSharp?.gatsbyImageData?.images.fallback.src
    : data.frontmatter.thumbnail
  const imageAlt = data.title ? data.title : data.frontmatter.title

  return (
    <div className="relative h-[16.375rem] w-full max-w-[24.rem] rounded-xl xl:w-[24.5rem]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  )
}
