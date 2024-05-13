import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Image from '../resolvers/Image'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import { cn } from '@/lib/helper'

export default function ContentImage({ data }) {
  const isReversed = data?.variant !== 'reversed'
  return (
    <Section settings={data?.settings}>
      <Container
        className={cn(
          'flex flex-col items-center justify-center gap-12 lg:gap-32',
          { 'flex-col lg:flex-row-reverse': isReversed },
          { 'flex-col lg:flex-row': !isReversed },
        )}
      >
        <div>
          {data?.photo?.image && (
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              className="w-full max-w-[37.5rem] rounded-[1.25rem]"
            />
          )}
        </div>
        <div className=" w-full max-w-prose lg:max-w-[500px]">
          {data?.title && (
            <Title Tag="h2" className="mb-5 text-center md:text-left">
              {data?.title}
            </Title>
          )}
          {data?.content && <Text>{data?.content}</Text>}
          {data?.buttons && <Buttons buttons={data?.buttons} />}
        </div>
      </Container>
    </Section>
  )
}
