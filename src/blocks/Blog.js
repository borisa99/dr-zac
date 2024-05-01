import React from 'react'
import { useMemo } from 'react'
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

export default function Blog({ data, posts }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isHomepage = data?.variant === 'homepage'
  const category = isHomepage ? 'MEDICAL' : data.title.toUpperCase()

  const filteredPosts = useMemo(() => {
    if (isHomepage) return posts
    return posts.filter((post) => {
      const tags = post.node.frontmatter.tags || []
      return tags.includes(category.toUpperCase())
    })
  }, [posts, category, isHomepage])

  return (
    <Section settings={data?.settings} className="bg-white pb-40 pt-28">
      <Container>
        <BlogHeroTitle data={data} />
        <BlogHeroContent data={data} />
        <PostList
          // type={data.title.toUpperCase()}
          isVariant={isVariantLarge || isHomepage}
          posts={filteredPosts}
          // preview={preview}
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
