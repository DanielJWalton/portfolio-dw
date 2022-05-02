import React from 'react'
import ContactForm from '../components/contactForm'
import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

export default function Contact() {
  return (
    <>
      <Layout title="Contact">
        <Container>
          <div className="justify-between space-y-2 ">
            <p className="text-3xl ">Contact Me</p>
            <p>
              for <span className="text-green-400">business</span>{' '}
              dev.danwalton@gmail.com
            </p>
            <br />

            <ContactForm />
            <br />
            <div className="flex space-x-5 justify-between p-5">
              <h1>Daniel Walton</h1>
              <p className="font-size-lg mb-0 text-black-50">760-457-0728</p>
              <a
                className="hover-scale-lg btn no-link text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/devdanwalton/"
              >
                <span className="text-green-400">LinkedIn</span>
              </a>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
