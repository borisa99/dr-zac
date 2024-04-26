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
import { useAuthors } from '@/hooks/useAuthors'

const Post = ({ data }) => {
  const getAuthor = useAuthors()

  const author = useMemo(() => getAuthor(data), [getAuthor, data])

  return (
    <Layout nav={true}>
      <Section className="pt-[10.5rem]">
        <Container>
          <div className="w-full px-56">
            <PostTag data={data} />
            <Title
              Tag="h1"
              children={data.post.frontmatter.title}
              className="mb-10 text-[4rem] leading-[4.5rem]"
            />
            <PostAuthor author={author} data={data} />
          </div>
          <PostContent data={data} />
          <PostRecentBlock />
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
  }
`
