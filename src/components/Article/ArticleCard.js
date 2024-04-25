import React from 'react'
import Paragraph from '../UI/Paragraph'
import Title from '../UI/Title'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function ArticleCard({ data, variant }) {
  const { node: post } = data
  const variant1 = variant === '1'
  const variant2 = variant === '2'

  return (
    <article className={cn({ 'mb-16': variant1 })}>
      <div
        className={cn('flex w-full items-center gap-16', {
          'flex-col gap-6': variant2,
        })}
      >
        <div
          className={cn(
            {
              'h-[25rem] w-[37.5rem] rounded-[1.25rem] border border-black':
                variant1,
            },
            {
              'h-[16.375rem] w-[24.5rem] rounded-xl border border-black':
                variant2,
            },
          )}
        >
          <Image
            fill={true}
            src={post.frontmatter?.thumbnail}
            className="rounded-[1.25rem]"
          />
        </div>
        <div
          className={cn(
            'h-full',
            { 'w-[35rem]': variant1 },
            { 'w-[24.5rem]': variant2 },
          )}
        >
          <Title
            variant={variant1 ? 'article' : 'article-variant'}
            children={post.frontmatter.title}
          />
          <Paragraph
            variant={variant1 ? 'article' : 'article-variant'}
            children={post?.excerpt}
            className="mb-3"
          />
          <div className="flex items-start gap-3">
            <Image
              fill={true}
              src={post.frontmatter?.thumbnail}
              className="h-[2.75rem] w-[2.75rem] rounded-full border border-black"
            />
            <div className="text-sm leading-5">
              <p className="mb-1 font-semibold">Author name</p>
              <p className="text-[#6D6D6D]">{post.frontmatter.date}</p>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </article>
  )
}
