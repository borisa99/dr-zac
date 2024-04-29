import React, { useMemo } from 'react'
import PostAuthor from './PostAuthor'
import PostCardContent from './PostCard/PostCardContent'
import PostCardImage from './PostCard/PostCardImage'
import PostCardTitle from './PostCard/PostCardTitle'
import { cn } from '@/lib/helper'
import Link from '@/resolvers/Link'

export default function PostCard({ data, variant }) {
  const variant1 = variant === '1'
  const variant2 = variant === '2'
  const variantVal = useMemo(() => variant1 ?? variant2, [variant1, variant2])

  return (
    <Link to={data?.node.frontmatter.permalink}>
      <article className={cn({ 'mb-16': variant1 })}>
        <div
          className={cn(
            'flex w-full flex-col items-center gap-6 ',
            { 'xl:flex-row xl:gap-16 ': variant1 },
            {
              'flex-col gap-6': variant2,
            },
          )}
        >
          <PostCardImage data={data} variant={variantVal} />
          <div
            className={cn(
              'h-full',
              { 'w-full lg:w-[35rem]': variant1 },
              { 'w-full lg:w-[24.5rem]': variant2 },
            )}
          >
            <div className="flex flex-col items-center justify-between text-center xl:h-[11.75rem] xl:items-start xl:text-left">
              <PostCardTitle data={data} variant={variantVal} />
              <PostCardContent data={data} variant={variantVal} />
              <PostAuthor data={data} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
