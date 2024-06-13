import React from 'react'
import { Signature } from '../components/Icons/Signature'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function Hero({ data }) {
  const isDefault = data?.variant === 'default'
  const isSideImage = data?.variant === 'aside'
  const isFull = data?.variant === 'full-light'

  return (
    <Section
      settings={data?.settings}
      className={cn('relative bg-blue-100', {
        'grid grid-cols-1 grid-rows-1 justify-center text-center': isDefault,
        'grid grid-cols-1 grid-rows-1': isFull,
      })}
    >
      {data?.photo?.image && (isDefault || isFull) && (
        <div className="col-span-1 col-start-1 row-start-1">
          <Image
            src={data?.photo?.image}
            alt={data?.photo?.alt}
            role="presentation"
            loading="eager"
            className="h-full w-full"
          />
        </div>
      )}
      <Container
        className={cn('flex flex-col items-center pt-[12.25rem] xl:flex-row', {
          'relative col-start-1 row-start-1 justify-center pb-32': isDefault,
          'relative col-start-1 row-start-1 pb-32 lg:flex-row lg:pt-[256px]':
            isFull,
          'grid-cols-2 gap-6 lg:grid': isSideImage,
        })}
      >
        <div className="grid grid-cols-1 grid-rows-1">
          <Title
            Tag="h1"
            variant="hero"
            className={cn('mb-3', {
              'xl:text-center': isDefault,
              'text-center text-white lg:text-left': isFull,
            })}
          >
            {data?.title}
          </Title>
          <Text
            className={cn({
              'mx-auto text-center': isDefault,
              'text-center text-white lg:text-left': isFull,
            })}
          >
            {data?.content}
          </Text>
          {data?.buttons && (
            <Buttons
              target="undefined"
              buttons={data?.buttons}
              className={cn(
                'mt-6 justify-center ',
                {
                  'justify-center': isDefault,
                },
                {
                  'lg:justify-start': isFull,
                },
                { 'xl:justify-start': !isDefault },
              )}
            />
          )}
          {data?.decoration === 'signature' && (
            <div
              className={cn('mt-8', {
                'mx-auto text-white lg:mx-0': isFull,
                'text-black': !isFull,
              })}
            >
              <Signature width={129} height={64} />
            </div>
          )}
        </div>
        {data?.photo?.image && isSideImage && (
          <div className="h-full w-full justify-center md:flex">
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              loading="eager"
              className="z-10 h-auto w-full max-w-[37.5rem] xl:w-[37.5rem]"
            />
          </div>
        )}
      </Container>
    </Section>
  )
}
