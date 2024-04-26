import React from 'react'
import Paragraph from '@/components/UI/Paragraph'
import Image from '@/resolvers/Image'

const PostContent = ({ data }) => {
  return (
    <>
      <div className="my-20 h-[51.125rem] w-full rounded-xl">
        <Image
          src={data.post.frontmatter.thumbnail}
          fill="true"
          className="rounded-xl"
        />
      </div>
      <div className="px-56">
        <Paragraph children={data.post.html} variant="post" />
      </div>
    </>
  )
}

export default PostContent
