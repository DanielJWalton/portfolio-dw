import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useColorModeValue, Box, Text } from '@chakra-ui/react'

function ContactForm() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_06ls30l',
        'template_budcolk',
        e.target,
        'user_C2WLgYuMuPce0xUrlumsj'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <div className="overflow-hidden ">
          <form
            id="form"
            ref={form}
            onSubmit={sendEmail}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 "
          >
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
              className="text-2xl font-bold"
            >
              Send a message
            </Text>

            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
              className="font-light mt-8"
              htmlFor="fullname"
            >
              Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </Text>
            <input
              placeholder="John Appleseed"
              htmlFor="from_name"
              type="text"
              name="from_name"
              id="from_name"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-800 font-light text-gray-500"
            />

            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
              className="font-light mt-8"
              htmlFor="from_email"
            >
              Email<span className="text-red-500 dark:text-gray-50">*</span>
            </Text>
            <input
              placeholder="japple@gmail.com"
              htmlFor="from_email"
              type="text"
              name="from_email"
              id="from_email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-800 font-light text-gray-500"
            />

            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
              className="font-light mt-8"
              htmlFor="subject"
            >
              Subject<span className="text-red-500 dark:text-gray-50">*</span>
            </Text>
            <input
              placeholder="What is the subject of your message?"
              htmlFor="subject"
              type="text"
              name="subject"
              id="subject"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-800 font-light text-gray-500"
            />

            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
              className="font-light mt-8"
              htmlFor="message"
            >
              Message<span className="text-red-500 dark:text-gray-50">*</span>
            </Text>
            <textarea
              placeholder="Thank you for reaching out to me."
              htmlFor="from_email"
              type="textarea"
              name="message"
              id="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-800 font-light text-gray-500"
            ></textarea>
            <div className="flex flex-row items-center justify-start">
              <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                Send
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-green-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </Box>
    </>
  )
}

export default ContactForm
