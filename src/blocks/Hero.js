import React from 'react'
import HeroButtons from '@/components/Hero/HeroButtons'
import HeroImage from '@/components/Hero/HeroImage'
import HeroTitle from '@/components/Hero/HeroTitle'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function Hero({ data }) {
  const isCentered = data?.variant === 'center'
  const isFull = data?.variant === 'full'

  return (
    <Section
      settings={data?.settings}
      className={cn(
        'bg-hero relative  pt-[14.25rem]',
        {
          'flex items-center pb-0': isFull,
        },
        {
          'flex justify-center  pb-32 text-center': isCentered,
        },
      )}
    >
      <Container
        className={cn('flex items-center', {
          'justify-center': isCentered,
        })}
      >
        <div>
          <HeroTitle data={data} />
          <Paragraph variant={data?.variant} children={data?.content} />
          <HeroButtons isCentered={isCentered} data={data} />
          {data?.photo?.image && (
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              className="mt-8 h-auto w-[8rem]"
            />
          )}
        </div>
        <HeroImage data={data} isFull={isFull} />
      </Container>
    </Section>
  )
}
