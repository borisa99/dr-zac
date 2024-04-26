import React from 'react'
import BlogList from '@/components/Post/PostList'
import Button from '@/components/UI/Button'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

const PostRecentBlock = () => {
  return (
    <div className="mb-[9.5rem] mt-40">
      <div className="mb-4 flex w-full items-center justify-between">
        <Title variant="article" children="More posts" />
        <Button children="View more posts" url="/blog/" />
      </div>
      <Paragraph
        variant="article"
        children="Got any medical questions or concerns? Dr. Zac’s got your back."
        className="mb-[4.125rem]"
      />
      <BlogList isVariant={false} />
    </div>
  )
}

export default PostRecentBlock
