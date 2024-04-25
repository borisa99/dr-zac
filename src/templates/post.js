import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import ArticleList from '@/components/Article/ArticleList'
import DefaultHead from '@/components/Head/DefaultHead'
import Layout from '@/components/Layout'
import Button from '@/components/UI/Button'
import Container from '@/components/UI/Container'
import Paragraph from '@/components/UI/Paragraph'
import Section from '@/components/UI/Section'
import Title from '@/components/UI/Title'
import Image from '@/resolvers/Image'

const Post = ({ data }) => {
  return (
    <Layout nav={true}>
      <Section className="pt-[10.5rem]">
        <Container>
          <div className="w-full px-56">
            <div className="mb-5 flex gap-2">
              {data.post.frontmatter.tags &&
                data.post.frontmatter.tags.map((tag, i) => {
                  return (
                    <p
                      key={i}
                      className="text-blue flex cursor-pointer gap-1 rounded-full border-[1px] border-[#BCDCFF] bg-transparent px-5 py-4 text-[0.813rem] uppercase"
                    >
                      {tag}
                    </p>
                  )
                })}
            </div>
            <Title
              Tag="h1"
              children={data.post.frontmatter.title}
              className="mb-10 text-[4rem] leading-[4.5rem]"
            />
            <div className="flex items-start gap-3">
              <Image
                fill={true}
                src={data.post.frontmatter?.thumbnail}
                className="h-[2.75rem] w-[2.75rem] rounded-full border border-black"
              />
              <div className="text-sm leading-5">
                <p className="mb-1 font-semibold">Author name</p>
                <p className="text-[#6D6D6D]">{data.post.frontmatter.date}</p>
              </div>
            </div>
          </div>
          <div className="my-20 h-[51.125rem] w-full rounded-xl">
            <Image
              src={data.post.frontmatter.thumbnail}
              fill={true}
              className="rounded-xl"
            />
          </div>
          <div className="px-56">
            <Paragraph children={data.post.html} variant="post" />
          </div>
          <div className="mb-[9.5rem] mt-40">
            <div className="mb-4 flex w-full items-center justify-between">
              <Title variant="article" children="More posts" />
              <Button children="View more posts" url="/blog/" />
            </div>
            <Paragraph
              variant="article"
              children="Got any medical questions or concerns? Dr. Zac’s got your back."
              className="mb-[4.125rem]"
            />
            <ArticleList isVariant={false} />
          </div>
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
