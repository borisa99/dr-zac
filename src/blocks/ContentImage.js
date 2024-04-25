import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function ContentImage({ data }) {
  const isReversed = data?.variant === 'reversed'
  return (
    <Section settings={data?.settings} className="bg-white pb-28 pt-[5.438rem]">
      <Container>
        <div
          className={cn(
            'flex flex-row items-center justify-center gap-32',
            { 'flex-row-reverse': isReversed },
            { 'flex-row': !isReversed },
          )}
        >
          <div className="">
            {data?.photo?.image && (
              <Image
                src={data?.photo?.image}
                alt={data?.photo?.alt}
                className="w-full rounded-[1.25rem]"
              />
            )}
          </div>
          <div className="w-1/2">
            <div className="">
              {data?.title && (
                <Title
                  Tag="h2"
                  variant="article"
                  className="mb-5 text-[#181818]"
                >
                  {data?.title}
                </Title>
              )}
              {data?.content && (
                <Paragraph className="w-full">{data?.content}</Paragraph>
              )}
              {data?.buttons && (
                <Buttons buttons={data?.buttons} className="" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
