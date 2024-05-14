import React from 'react'
import { useRecentArticles } from '../../hooks/useRecentArticles'

function RecentArticles() {
  const articles = useRecentArticles()
  return <PostList post={articles} />
}

export default RecentArticles
