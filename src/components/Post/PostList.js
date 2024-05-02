import React from 'react'
import PostCard from '@/components/Post/PostCard'

export default function PostList({ isVariant, posts, categoryFilter }) {
  return (
    <>
      {categoryFilter && posts?.length > 0 ? (
        <div className="gay-y-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((item, i) => {
            return <PostCard variant="2" key={i} data={item} />
          })}
        </div>
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
