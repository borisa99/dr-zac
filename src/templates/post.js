import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Image from '../resolvers/Image'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import PostAuthor from '@/components/Post/PostAuthor'
import PostRecentBlock from '@/components/Post/PostRecentBlock'
import PostTag from '@/components/Post/PostTag'
import Container from '@/components/UI/Container'
import Title from '@/components/UI/Title'

const Post = ({ data }) => {
  const { html, frontmatter: post } = data.post
  // const author = useMemo(() => {
  //   const authorID = data.post.frontmatter.author
  //   return data.authorData.edges.find((authorData) => {
  //     return authorData.node.frontmatter.id === authorID
  //   })
  // }, [data])

  return (
    <Layout nav={true}>
      <article className="pt-[10.5rem]">
        <header>
          <Container>
            <div className="mx-auto mb-20 w-full max-w-3xl">
              <Title Tag="h1" variant="xl" className="text-balance">
                {post.title}
              </Title>
              {post.date}
              {/* <PostAuthor author={author.node.frontmatter} data={data} /> */}
            </div>
            {post.thumbnail && (
              <div className="my-10 w-full rounded-xl xl:my-20 xl:h-[51.125rem]">
                <Image
                  src={post.thumbnail}
                  fill="true"
                  className="rounded-xl"
                />
              </div>
            )}
          </Container>
        </header>
        <Container>
          <main
            className="prose mx-auto max-w-3xl text-lg leading-loose lg:text-xl lg:leading-loose"
            dangerouslySetInnerHTML={{ __html: html }}
          ></main>
          {/* <PostRecentBlock authors={data.authorData.edges} /> */}
        </Container>
      </article>
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
        title
        date(formatString: "MMMM DD, YYYY")
        author
        categories
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
