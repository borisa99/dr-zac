import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'

export default function Heading({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white pb-16 pt-[7.063rem]">
      <Container className="w-[50rem] text-center">
        {data?.title && (
          <Title variant="heading" children={data?.title} className="mb-4" />
        )}
        {data?.content && (
          <Paragraph className="mx-auto mb-8 w-full">{data?.content}</Paragraph>
        )}
        {data?.buttons && (
          <Buttons
            buttonClassName="w-[10.313rem]"
            buttons={data?.buttons}
            className="justify-center"
          />
        )}
      </Container>
    </Section>
  )
}
