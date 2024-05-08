import React, { useMemo } from 'react'
import { getDate } from '@/utils/helpers'
import Image from '@/resolvers/Image'

const PostAuthor = ({ author, data, preview }) => {
  const date = useMemo(() => getDate(data), [data])

  return (
    <div className="flex items-start justify-center gap-3 xl:justify-start">
      <Image
        src={
          preview
            ? author?.thumbnail.childImageSharp?.gatsbyImageData?.images
                .fallback.src
            : author?.thumbnail
        }
        className="h-[2.75rem] w-[2.75rem] rounded-full border"
      />
      <div className="text-sm leading-5">
        <p className="mb-1 font-semibold">{author?.title}</p>
        <p className="text-[#6D6D6D]">{date}</p>
      </div>
    </div>
  )
}

export default PostAuthor
