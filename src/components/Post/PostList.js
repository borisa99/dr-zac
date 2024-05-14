import React from 'react'
import PostCard from '@/components/Post/PostCard'

export default function PostList({ posts, promoted = false, preview = false }) {
  return (
    <>
      {posts.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ node: { frontmatter: item } }, i) => {
            return (
              <PostCard
                key={i}
                item={item}
                promoted={promoted ? i == 0 : false}
              />
            )
          })}
        </div>
      )}
    </>
  )
}
