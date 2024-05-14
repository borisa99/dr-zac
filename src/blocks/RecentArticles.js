import React from 'react'
import LatestArticles from '../components/Articles/LatestArticles'
import Buttons from '../components/UI/Buttons'
import Container from '../components/UI/Container'
import Section from '../components/UI/Section'

function RecentArticles({ data, preview = false }) {
  return (
    <Section settings={data?.settings}>
      <Container>
        {preview ? (
          'Show the articles here'
        ) : (
          <LatestArticles promoted={data.variant == 'promoted'} />
        )}
        {data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className="mt-16 flex items-center justify-center "
          ></Buttons>
        )}
      </Container>
    </Section>
  )
}

export default RecentArticles
