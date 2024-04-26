import React from 'react'
import Paragraph from '@/components/UI/Paragraph'
import Image from '@/resolvers/Image'

const PostContent = ({ data }) => {
  return (
    <>
      <div className="my-10 w-full rounded-xl xl:my-20 xl:h-[51.125rem]">
        <Image
          src={data.post.frontmatter.thumbnail}
          fill="true"
          className="rounded-xl"
        />
      </div>
      <div className="xl:px-56">
        <Paragraph
          children={data.post.html}
          variant="post"
          className="text-center xl:text-left"
        />
      </div>
    </>
  )
}

export default PostContent
