import React from 'react'
import BlogHeroButtons from '@/components/Blog/BlogHeroButtons'
import BlogHeroContent from '@/components/Blog/BlogHeroContent'
import BlogHeroTitle from '@/components/Blog/BlogHeroTitle'
import BlogPage from '@/components/Blog/BlogPage'
import PostList from '@/components/Post/PostList'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

//homepage
//blog-1
//blog-2

export default function Articles({ data, preview }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isHomepage = data?.variant === 'homepage'

  return (
    <Section settings={data?.settings} className={`bg-white pb-40 pt-28`}>
      {isHomepage ? (
        <Container>
          <PostList
            authors={data.authors}
            isVariant={isVariantLarge || isHomepage}
            posts={data.posts}
            preview={preview}
          />
          <BlogHeroButtons data={data} />
        </Container>
      ) : (
        <BlogPage preview={preview} data={data} />
      )}
    </Section>
  )
}
