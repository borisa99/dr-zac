import React from 'react'
import PostList from '@/components/Post/PostList'
import Button from '@/components/UI/Button'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'
import { usePosts } from '@/hooks/usePosts'

const PostRecentBlock = () => {
  const posts = usePosts()

  return (
    <div className="mb-[9.5rem] mt-40">
      <div className="mb-4 flex w-full items-center justify-center xl:justify-between">
        <Title
          variant="article"
          children="More posts"
          className="text-center text-[2.2rem] xl:text-[3rem]"
        />
        <Button
          className="hidden xl:inline-block"
          children="View more posts"
          button={{
            variant: 'default',
            url: '/blog/',
          }}
        />
      </div>
      <Paragraph
        variant="article"
        children="Got any medical questions or concerns? Dr. Zac’s got your back."
        className="mb-[4.125rem] text-center xl:text-left"
      />
      <PostList posts={posts} isVariant={false} />
      <div className="mt-20 flex w-full justify-center xl:hidden">
        <Button
          children="View more posts"
          button={{
            variant: 'default',
            url: '/blog/',
          }}
        />
      </div>
    </div>
  )
}

export default PostRecentBlock
