import React from 'react'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import VideoPlayer from '@/components/Video/VideoPlayer'

export default function Video({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white pb-16 pt-[7.063rem]">
      <Container className="w-full">
        <VideoPlayer data={data} />
      </Container>
    </Section>
  )
}
