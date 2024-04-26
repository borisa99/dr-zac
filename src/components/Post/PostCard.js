import React, { useMemo } from 'react'
import PostAuthor from './PostAuthor'
import PostCardContent from './PostCard/PostCardContent'
import PostCardImage from './PostCard/PostCardImage'
import PostCardTitle from './PostCard/PostCardTitle'
import { cn } from '@/lib/helper'

export default function PostCard({ data, variant }) {
  const variant1 = variant === '1'
  const variant2 = variant === '2'
  const variantVal = useMemo(() => variant1 ?? variant2, [variant1, variant2])

  return (
    <article className={cn({ 'mb-16': variant1 })}>
      <div
        className={cn('flex w-full items-center gap-16', {
          'flex-col gap-6': variant2,
        })}
      >
        <PostCardImage data={data} variant={variantVal} />
        <div
          className={cn(
            'h-full',
            { 'w-[35rem]': variant1 },
            { 'w-[24.5rem]': variant2 },
          )}
        >
          <div className="flex h-[11.75rem] flex-col  justify-between">
            <PostCardTitle data={data} variant={variantVal} />
            <PostCardContent data={data} variant={variantVal} />
            <PostAuthor data={data} />
          </div>
        </div>
      </div>
    </article>
  )
}
