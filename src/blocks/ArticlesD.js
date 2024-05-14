import React from 'react'
import Category from '../components/Article/Category'
import FeaturedArticles from '../components/Article/FeaturedArticles'
import Recent from '../components/Article/Recent'
import Buttons from '../components/UI/Buttons'
import Container from '../components/UI/Container'
import Title from '../components/UI/Title'

export default function Articles({ data, preview }) {
  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        {data.variant !== 'featured' && (
          <div className="mb-6 flex flex-col justify-between md:mb-12 md:flex-row md:items-end">
            <Title Tag="h2" variant="md" className="mb-4 max-w-2xl md:mb-0">
              {data?.title}
            </Title>
            {data?.buttons && (
              <Buttons buttons={data?.buttons} className="hidden md:block" />
            )}
          </div>
        )}
        {preview ? (
          'Articles will show up here'
        ) : (
          // <>
          //   {data.variant === 'featured' ? (
          //     <FeaturedArticles />
          //   ) : (
          //     <>
          //       {data?.category ? <Category cat={data.category} /> : <Recent />}
          //     </>
          //   )}
          // </>
        )}
        {data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className="mt-12 justify-center text-center md:hidden"
          />
        )}
      </Container>
    </section>
  )
}
