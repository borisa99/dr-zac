import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

export default function TitleBlock({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white">
      <Container className="mx-auto max-w-[808px] text-center">
        {data?.title && (
          <Title variant="heading" children={data?.title} className="mb-4" />
        )}
        {data?.content && (
          <Text className="mx-auto mb-8 w-full">{data?.content}</Text>
        )}
        {data?.buttons && (
          <Buttons buttons={data?.buttons} className="justify-center" />
        )}
      </Container>
    </Section>
  )
}