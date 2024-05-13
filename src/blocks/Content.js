import React from 'react'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Text from '@/components/UI/Text'

export default function Content({ data }) {
  return (
    <Section settings={data?.settings}>
      <Container>
        {data?.content && (
          <Text className="mx-auto w-full max-w-6xl">{data?.content}</Text>
        )}
      </Container>
    </Section>
  )
}
