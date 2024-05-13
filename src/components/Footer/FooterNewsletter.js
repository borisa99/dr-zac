import React from 'react'
import Container from '../UI/Container'
import Text from '../UI/Text'
import Title from '../UI/Title'
import FooterNewsletterForm from './FooterNewsletterForm'

export default function FooterNewsletter() {
  return (
    <div className="mb-20 rounded-[1.25rem] bg-blue-950 py-24 text-white">
      <Container className="flex flex-col items-center justify-center gap-y-8 ">
        <div className="text-center">
          <Title
            className="mb-4 text-white"
            variant="lg"
            children={
              'Sign up to my <span class="text-blue-500">newsletter</span>'
            }
          ></Title>
          <Text className="text-gray-100 prose-p:text-md">
            I am passionate about proactive, preventative healthcare, and
            inspiring others to live happier and healthier for longer.
          </Text>
        </div>
        <FooterNewsletterForm />
      </Container>
    </div>
  )
}
