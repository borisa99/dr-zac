import React from 'react'
import ArticleList from '@/components/Article/ArticleList'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'

//homepage
//blog-1
//blog-2

export default function Articles({ data, preview }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isVariantSmall = data?.variant === 'blog-2'
  const isHomepage = data?.variant === 'homepage'

  return (
    <Section settings={data?.settings} className="bg-white pt-28">
      <Container>
        <div className="mb-4 flex w-full items-center justify-between">
          <Title variant="article" children={data?.title} />
          {(isVariantSmall || isVariantLarge) && data?.buttons && (
            <Buttons buttons={data?.buttons} className={cn('')} />
          )}
        </div>
        <Paragraph
          variant="article"
          children={data?.content}
          className="mb-[4.125rem]"
        />
        {preview ? (
          'Articles will show up here'
        ) : (
          <ArticleList isVariant={isVariantLarge || isHomepage} />
        )}
        {isHomepage && data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className={cn('mt-24 justify-center')}
          />
        )}
      </Container>
    </Section>
  )
}
