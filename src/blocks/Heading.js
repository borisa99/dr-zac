import React from 'react'
import HeadingButtons from '@/components/Heading/HeadingButtons'
import HeadingContent from '@/components/Heading/HeadingContent'
import HeadingTitle from '@/components/Heading/HeadingTitle'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

export default function Heading({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white pb-16 pt-[7.063rem]">
      <Container className="w-full text-center xl:w-[50rem]">
        <HeadingTitle data={data} />
        <HeadingContent data={data} />
        <HeadingButtons data={data} />
      </Container>
    </Section>
  )
}
