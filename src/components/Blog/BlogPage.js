import React, { useEffect, useMemo, useState } from 'react'
import { filterPosts } from '@/utils/helpers'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import BlogHeroContent from '@/components/Blog/BlogHeroContent'
import PostList from '@/components/Post/PostList'
import Button from '@/components/UI/Button'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'

const BlogPage = ({ data, preview }) => {
  const location = useLocation()
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  )
  const [categoryFilter, setCategoryFilter] = useState(null)
  const filteredPosts = useMemo(() => filterPosts(data), [data])

  const handleCategoryChange = (category, event) => {
    event.preventDefault()
    const encodedCategory = encodeURIComponent(category)

    navigate(`/blog?cat=${encodedCategory}`)
  }

  useEffect(() => {
    const catFilter = queryParams.get('cat')
    setCategoryFilter(catFilter)
    return () => {
      setCategoryFilter(null)
    }
  }, [queryParams])

  if (categoryFilter && categoryFilter !== data.category.toLowerCase()) return

  return (
    <Section settings={data?.settings} className={`bg-white  pb-40 pt-28`}>
      <Container>
        <div
          className={`mb-4 flex w-full flex-col justify-center xl:flex-row xl:items-end  ${categoryFilter ? 'xl:justify-center' : 'xl:justify-between'}`}
        >
          <Title
            variant="article"
            children={data.title}
            className="title-font text-center text-[2.2rem] xl:text-[3rem]"
          />
          {!categoryFilter ? (
            <Button
              onClick={(e) =>
                handleCategoryChange(data.category.toLowerCase(), e)
              }
              className={cn('hidden xl:inline-block')}
              children={`View all ${data.title} articles`}
            />
          ) : null}
        </div>
        {!categoryFilter ? (
          <BlogHeroContent
            data={{
              content: `Got any ${data.title.toLowerCase()} questions or concerns? Dr. Zac's got your back.`,
            }}
          />
        ) : null}

        <PostList
          preview={preview}
          authors={data.authors}
          categoryFilter={categoryFilter}
          isVariant={data.category === 'Medical'}
          posts={filteredPosts}
        />
      </Container>
    </Section>
  )
}

export default BlogPage
