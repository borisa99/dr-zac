import React from 'react'
import PostCard from '@/components/Post/PostCard'
import { usePosts } from '@/hooks/usePosts'

export default function PostList({ isVariant, preview }) {
  const posts = usePosts()

  return (
    <>
      {preview ? (
        'Articles will show up here'
      ) : (
        <div>
          {isVariant && posts.length > 0 && (
            <PostCard variant="1" key={0} data={posts[0]} />
          )}

          <div className="flex flex-col gap-[10rem] gap-y-12  md:flex-row md:gap-x-[1vw]">
            {posts &&
              posts.map((item, i) => {
                return <PostCard variant="2" key={i} data={item} />
              })}
          </div>
        </div>
      )}
    </>
  )
}
