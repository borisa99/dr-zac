import React, { useMemo } from 'react'
import Image from '@/resolvers/Image'
import { useAuthors } from '@/hooks/useAuthors'

const PostAuthor = ({ data }) => {
  const getAuthor = useAuthors()
  const author = useMemo(() => getAuthor(data), [getAuthor, data])

  const date = data?.node?.frontmatter.date ?? data.post.frontmatter.date

  return (
    <div className="flex items-start justify-center gap-3 xl:justify-start">
      <Image
        src={author?.thumbnail}
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
