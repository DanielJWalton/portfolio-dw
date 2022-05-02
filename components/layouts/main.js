import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import SceneLoader from '../scene-loader'

const LazyScene = dynamic(() => import('../scene'), {
  ssr: false,
  loading: () => <SceneLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dan's homepage" />
        <meta name="author" content="Dan Walton" />
        <meta name="author" content="maru" />
        <link rel="danW" href="danW.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maruonvhs" />
        <meta name="twitter:creator" content="@maruonvhs" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Dan Walton's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Dan Walton - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} className="overflow-hidden">
        <LazyScene />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
