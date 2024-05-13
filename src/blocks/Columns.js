import React from 'react'
import Text from '../components/UI/Text'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import Image from '@/resolvers/Image'

export default function Columns({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white">
      <Container
        className={`flex w-full flex-col items-center gap-[1.563rem] lg:flex-row`}
      >
        {data?.columns &&
          data?.columns.map((col, i) => {
            return (
              <div className="w-full text-center" key={i}>
                <div className="w-full">
                  {col?.photo?.image && (
                    <Image
                      src={col?.photo?.image}
                      alt={col?.photo?.alt}
                      className="mb-6 h-auto w-full max-w-[37.5rem] lg:mb-8"
                    />
                  )}
                  {col?.title && (
                    <Title Tag="h2" className=" mb-2 lg:mb-4">
                      {col.title}
                    </Title>
                  )}
                  {col?.content && (
                    <Text className="mx-auto mb-4 text-center lg:mb-6">
                      {col?.content}
                    </Text>
                  )}
                  {data?.buttons && data?.buttons.length > 0 && (
                    <Buttons
                      buttons={[data?.buttons[i]]}
                      className="justify-center"
                    />
                  )}
                </div>
              </div>
            )
          })}
      </Container>
    </Section>
  )
}
