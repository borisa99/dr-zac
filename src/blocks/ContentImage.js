import React from 'react'
import ContentImageButtons from '@/components/ContentImage/ContentImageButtons'
import ContentImageContent from '@/components/ContentImage/ContentImageContent'
import ContentImagePhoto from '@/components/ContentImage/ContentImagePhoto'
import ContentImageTitle from '@/components/ContentImage/ContentImageTitle'
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
            'flex flex-row items-center justify-center gap-32',
            { 'flex-row-reverse': isReversed },
            { 'flex-row': !isReversed }
          )}
        >
          <ContentImagePhoto data={data} />
          <div className="w-1/2">
            <ContentImageTitle data={data} />
            <ContentImageContent data={data} />
            <ContentImageButtons data={data} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
