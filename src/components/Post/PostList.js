import React from 'react'
import PostCard from '@/components/Post/PostCard'

export default function PostList({ isVariant, preview, posts }) {
  return (
    <>
      {preview ? (
        'Articles will show up here'
      ) : (
        <div>
          {isVariant && posts?.length > 0 && (
            <PostCard variant="1" key={0} data={posts[3]} />
          )}

          <div className="flex flex-col gap-[10rem] gap-y-12  md:flex-row md:gap-x-[1vw]">
            {posts?.length > 0 &&
              posts.slice(0, 3).map((item, i) => {
                return <PostCard variant="2" key={i} data={item} />
              })}
          </div>
        </div>
      )}
    </>
  )
}
