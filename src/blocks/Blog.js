import React from 'react'
import BlogHeroButtons from '@/components/Blog/BlogHeroButtons'
import BlogHeroContent from '@/components/Blog/BlogHeroContent'
import BlogHeroTitle from '@/components/Blog/BlogHeroTitle'
import BlogList from '@/components/Post/PostList'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

//homepage
//blog-1
//blog-2

export default function Blog({ data, preview }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isHomepage = data?.variant === 'homepage'

  return (
    <Section settings={data?.settings} className="bg-white pt-28">
      <Container>
        <BlogHeroTitle data={data} />
        <BlogHeroContent data={data} />
        <BlogList isVariant={isVariantLarge || isHomepage} preview={preview} />
        <BlogHeroButtons data={data} />
      </Container>
    </Section>
  )
}
