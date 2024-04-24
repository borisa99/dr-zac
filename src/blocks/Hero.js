import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function Hero({ data }) {
  const isCentered = data?.variant === 'center'
  const isFull = data?.variant === 'full'

  return (
    <Section
      settings={data?.settings}
      className={cn(
        'bg-hero relative',
        {
          'flex items-center': isFull,
        },
        {
          'flex justify-center py-[7rem] text-center': isCentered,
        },
      )}
    >
      <Container
        className={cn('flex items-center', { 'justify-center': isCentered })}
      >
        <div>
          {data?.title && (
            <Title
              Tag="h1"
              variant="hero"
              className="mb-3"
              children={data?.title}
            />
          )}

          <Paragraph variant={data?.variant} children={data?.content} />
          {data?.buttons && (
            <Buttons
              buttons={data?.buttons}
              className={cn('mt-6', { 'justify-center': isCentered })}
            />
          )}
          {data?.photo?.image && (
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              className="mt-8 h-auto w-[8rem]"
            />
          )}
        </div>

        {data?.photo2?.image && (
          <div className="h-full w-full">
            <Image
              src={data?.photo2?.image}
              alt={data?.photo2?.alt}
              className="z-10 h-auto w-[37.5rem]"
            />
          </div>
        )}
        {isFull && (
          <div className="bg-blue absolute bottom-0 right-0 h-[25.625rem] w-[43.75rem] rounded-tl-[12.844rem]" />
        )}
      </Container>
    </Section>
  )
}
