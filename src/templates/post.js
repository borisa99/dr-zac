import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PostAuthor from '@/components/Post/PostAuthor'
import PostContent from '@/components/Post/PostContent'
import PostRecentBlock from '@/components/Post/PostRecentBlock'
import PostTag from '@/components/Post/PostTag'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'

const Post = ({ data }) => {
  const author = useMemo(() => {
    const authorID = data.post.frontmatter.author
    return data.authorData.edges.find((authorData) => {
      return authorData.node.frontmatter.id === authorID
    })
  }, [data])

  return (
    <Layout nav={true}>
      <Section className="pt-[10.5rem]">
        <Container>
          <div className="w-full xl:px-56">
            <PostTag data={data} />
            <Title
              Tag="h1"
              children={data.post.frontmatter.title}
              className="title-font mb-10 text-[4rem] leading-[4.5rem]"
            />
            <PostAuthor author={author.node.frontmatter} data={data} />
          </div>
          <PostContent data={data} />
          <PostRecentBlock authors={data.authorData.edges} />
        </Container>
      </Section>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.post.frontmatter.seo}>
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Post

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        date(formatString: "MMMM DD, YYYYY")
        author
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 690
              quality: 72
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        ...Seo
      }
    }
    authorData: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "author" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          ...AuthorData
        }
      }
    }
  }
`
