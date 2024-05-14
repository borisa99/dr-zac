import React from 'react'
import { graphql } from 'gatsby'
import CategorySelector from '../blocks/CategorySelector'
import Pagination from '../components/Pagination'
import PostList from '../components/Post/PostList'
import Container from '../components/UI/Container'
import Title from '../components/UI/Title'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'

const Category = ({ data, pageContext }) => {
  return (
    <Layout>
      <div className="bg-blue-100 pb-32">
        <Container className="pt-[14.25rem]">
          <Title Tag="h1" variant="hero">
            {data?.category.frontmatter?.name}
          </Title>
        </Container>
      </div>
      <CategorySelector
        data={{ settings: { padding_top: 'md', padding_bottom: 'sm' } }}
      />
      <Container>
        <PostList posts={data.posts.edges}></PostList>
        <Pagination
          className="mt-20"
          currentPage={pageContext.currentPage}
          totalPageCount={pageContext.numPages}
          url={data.category.frontmatter.permalink}
        />
      </Container>
    </Layout>
  )
}

export default Category

export const Head = ({ data }) => (
  <DefaultHead data={data.category.frontmatter.seo}></DefaultHead>
)

export const CategoryQuery = graphql`
  query CategoryQuery($category: String, $skip: Int!, $limit: Int!) {
    category: markdownRemark(id: { eq: $category }) {
      id
      frontmatter {
        name
        permalink
      }
    }
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          type: { eq: "article" }
          categories: { elemMatch: { id: { eq: $category } } }
        }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          ...ArticleCard
        }
      }
    }
  }
`
