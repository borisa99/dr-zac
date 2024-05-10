import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Image from '../resolvers/Image'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import { cn } from '@/lib/helper'

export default function ContentImage({ data }) {
  const isReversed = data?.variant === 'reversed'
  return (
    <Section settings={data?.settings} className="bg-white pb-28 pt-[5.438rem]">
      <Container>
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-32 xl:flex-row',
            { 'flex-col-reverse xl:flex-row-reverse': isReversed },
            { 'flex-col xl:flex-row': !isReversed },
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
          <div className="w-full max-w-[37.5rem] xl:w-1/2">
            {data?.title && (
              <Title
                Tag="h2"
                variant="article"
                className="font-400 title-font mb-5 text-center text-[#181818] xl:text-left"
              >
                {data?.title}
              </Title>
            )}
            {data?.content && <Text>{data?.content}</Text>}
            {data?.buttons && <Buttons buttons={data?.buttons} />}
          </div>
        </div>
      </Container>
    </Section>
  )
}
