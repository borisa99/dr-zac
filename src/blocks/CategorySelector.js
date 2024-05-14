import React from 'react'
import CategoryLink from '../components/Post/CategoryLink'
import Container from '../components/UI/Container'
import Section from '../components/UI/Section'
import { useCategories } from '../hooks/useCategories'

function CategorySelector({ data }) {
  const categories = useCategories()
  return (
    <Section settings={data?.settings}>
      <Container>
        <div className="flex flex-wrap gap-3">
          <CategoryLink
            category={{ frontmatter: { name: 'All', permalink: '/blog/' } }}
          />
          {categories.map(({ node: category }, i) => (
            <CategoryLink key={i} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default CategorySelector
