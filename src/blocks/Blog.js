import React from 'react'
import BlogHeroButtons from '@/components/Blog/BlogHeroButtons'
import BlogHeroContent from '@/components/Blog/BlogHeroContent'
import BlogHeroTitle from '@/components/Blog/BlogHeroTitle'
import PostList from '@/components/Post/PostList'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

//homepage
//blog-1
//blog-2

export default function Blog({ data, preview }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isHomepage = data?.variant === 'homepage'

  return (
    <Section settings={data?.settings} className="bg-white pb-40 pt-28">
      <Container>
        <BlogHeroTitle data={data} />
        <BlogHeroContent data={data} />
        <PostList
          type={data.title.toUpperCase()}
          isVariant={isVariantLarge || isHomepage}
          preview={preview}
        />
        <BlogHeroButtons data={data} />
        {!isHomepage ? (
          <Buttons
            buttons={data?.buttons}
            className="mt-20 flex justify-center xl:hidden"
          />
        ) : null}
      </Container>
    </Section>
  )
}
