import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import { cn } from '../lib/helper'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

export default function TitleBlock({ data }) {
  const isCentered = data?.alignment === 'centered'
  let titleVariant = 'default'
  let containerClass = 'max-w-[808px]'
  switch (data?.variant) {
    case 'small':
      titleVariant = 'sm'
      break
    case 'quote':
      titleVariant = 'italic'
      containerClass = 'max-w-5xl'
      break
    default:
      titleVariant = 'lg'
      break
  }
  return (
    <Section settings={data?.settings}>
      <Container>
        <div
          className={cn(containerClass, {
            'mx-auto text-center': isCentered,
          })}
        >
          {data?.title && (
            <Title
              variant={titleVariant}
              children={data?.title}
              className="mb-4"
            />
          )}
          {data?.content && (
            <Text
              className={
                ('mb-8',
                {
                  'mx-auto text-center': isCentered,
                })
              }
            >
              {data?.content}
            </Text>
          )}
          {data?.buttons && (
            <Buttons
              buttons={data?.buttons}
              className={cn('mt-8 justify-start', {
                'justify-center': isCentered,
              })}
            />
          )}
        </div>
      </Container>
    </Section>
  )
}
