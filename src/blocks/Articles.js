import React from 'react'
import CategoryArticles from '../components/Articles/CategoryArticles'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

export default function Articles({ data, preview = false }) {
  return (
    <Section settings={data?.settings}>
      <Container>
        <div className="mb-12 flex flex-col justify-between md:mb-12 md:flex-row md:items-end">
          <div>
            <Title variant="lg">{data.title}</Title>
            <Text>{data.content}</Text>
          </div>
          {data?.buttons && (
            <Buttons
              buttons={data?.buttons}
              className="hidden md:block"
            ></Buttons>
          )}
        </div>

        {preview ? (
          'Show the articles here'
        ) : (
          <>
            <CategoryArticles
              category={data.relation}
              promoted={data.variant === 'promoted'}
            />
          </>
        )}
        {data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className="mt-12 items-center justify-center text-center md:hidden"
          ></Buttons>
        )}
      </Container>
    </Section>
  )
}
