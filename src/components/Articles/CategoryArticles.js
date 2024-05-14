import React from 'react'
import { useCategoryArticles } from '../../hooks/useCategoryArticles'
import PostList from '../Post/PostList'

function CategoryArticles({ category, promoted = false }) {
  const articles = useCategoryArticles(category, promoted)
  return <PostList posts={articles} promoted={promoted} />
}

export default CategoryArticles
