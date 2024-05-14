import React from 'react'
import { useRecentArticles } from '../../hooks/useRecentArticles'
import PostList from '../Post/PostList'

function LatestArticles({ promoted = false }) {
  const articles = useRecentArticles(promoted)
  return <PostList posts={articles} promoted={promoted} />
}

export default LatestArticles
