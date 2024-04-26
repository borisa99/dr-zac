import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import Image from '@/resolvers/Image'

export default function Perks({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white pb-28 pt-24">
      <Container>
        <div
          className={`flex w-full flex-col items-center gap-[1.563rem] xl:flex-row`}
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
                        className="mb-8 h-auto w-full"
                      />
                    )}
                    {col?.title && (
                      <Title
                        Tag="h2"
                        variant="article"
                        className="title-font mb-4"
                      >
                        {col.title}
                      </Title>
                    )}
                    {col?.content && (
                      <Paragraph variant="article-variant" className="mb-6">
                        {col?.content}
                      </Paragraph>
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
        </div>
      </Container>
    </Section>
  )
}
