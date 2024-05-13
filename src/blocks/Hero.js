import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function Hero({ data }) {
  const isDefault = data?.variant === 'default'
  const isSideImage = data?.variant === 'aside'
  console.log(data)

  return (
    <Section
      settings={data?.settings}
      className={cn('relative bg-blue-100', {
        'grid grid-cols-1 grid-rows-1 justify-center text-center': isDefault,
      })}
    >
      {data?.photo?.image && isDefault && (
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
        className={cn('flex flex-col items-center pt-[14.25rem] xl:flex-row', {
          'relative col-start-1 row-start-1 justify-center pb-32': isDefault,
          'grid-cols-2 gap-6 lg:grid': isSideImage,
        })}
      >
        <div className="grid grid-cols-1 grid-rows-1">
          <Title
            Tag="h1"
            variant="hero"
            className={cn('mb-3', { 'xl:text-center': isDefault })}
          >
            {data?.title}
          </Title>
          <Text className={cn({ 'mx-auto text-center': isDefault })}>
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
                { 'xl:justify-start': !isDefault },
              )}
            />
          )}
          {data?.photo2?.image && (
            <div className="mb-8 flex w-full justify-center xl:justify-start">
              <Image
                src={data?.photo2?.image}
                alt={data?.photo2?.alt}
                className=" mt-8 h-auto w-[8rem]"
              />
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
