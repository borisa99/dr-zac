import React from 'react'
import Image from '../../resolvers/Image'
import Text from '../UI/Text'
import Title from '../UI/Title'
import PostAuthor from './PostAuthor'
import { cn } from '@/lib/helper'
import Link from '@/resolvers/Link'

export default function PostCard({ item, promoted = false, preview }) {
  return (
    <Link
      to={item.permalink}
      className={cn({ 'md:col-span-2 lg:col-span-3 lg:mb-8': promoted })}
    >
      <article>
        <div
          className={cn('grid w-full grid-cols-1 gap-6 ', {
            'lg:grid-cols-2 lg:items-center lg:gap-0': promoted,
          })}
        >
          {item.thumbnail && (
            <Image
              fill="true"
              src={item.thumbnail}
              className={cn('aspect-[1.49] w-full max-w-full rounded-xl')}
            />
          )}
          <div
            className={cn({
              'lg:pl-6 xl:pl-16': promoted,
            })}
          >
            <Title
              variant={promoted ? 'default' : 'xs'}
              children={item.title}
              className={cn('mb-4')}
            />
            <Text className={'line-clamp-2 text-md text-gray-500'}>
              {item.excerpt}
            </Text>
            <PostAuthor
              author={item?.author?.frontmatter}
              className="mt-6"
              item={item}
              preview={preview}
            />
          </div>
        </div>
      </article>
    </Link>
  )
}
