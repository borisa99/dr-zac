import React from 'react'
import ArticleCard from '@/components/Article/ArticleCard'
import { useArticles } from '@/hooks/useArticles'

export default function Recent({ isVariant }) {
  const posts = useArticles()

  return (
    <div>
      {isVariant && posts
        ? posts.map((item, i) => {
            if (i === 0)
              return <ArticleCard variant="1" order={i} key={i} data={item} />
            else return
          })
        : null}
      <div className="flex gap-6">
        {posts &&
          posts.map((item, i) => {
            return <ArticleCard variant="2" order={i} key={i} data={item} />
          })}
      </div>
    </div>
  )
}
