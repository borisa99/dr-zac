import React from 'react'
import { useRecentArticles } from '../../hooks/useRecentArticles'
import PostCard from '@/components/Post/PostCard'

export default function PostList({ posts, promoted = false, preview = false }) {
  return (
    <>
      <div className="gay-y-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </>
  )
}
