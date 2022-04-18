import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbTwitter from '../public/images/links/twitter.png'
import thumbDanium from '../public/images/links/danium.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in California!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dan Walton
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/dan.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Daniel is a freelance and a full-stack developer based in California
          with a passion for building unique digital experiences. When not
          online, he loves hanging out with his girlfriend and cats.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              color="white"
              bgColor={'#3500D3'}
            >
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in California, USA.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated Highschool and started teaching myself to code.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated from Sabio School of Software Engineering
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Worked at World Print! USA
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Hockey , Playing FPS Games, Photography , Coffee, Movies
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/DanielJWalton" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoGithub color="#3500D3" />}
              >
                @DanielJWalton
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/devdanwalton/"
              target="_blank"
            >
              <Button
                variant="ghost"
                leftIcon={<IoLogoLinkedin color="#3500D3" />}
              >
                @devdanwalton
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/MaruonVHS" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoTwitter color="#3500D3" />}
              >
                @MaruonVHS
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://twitter.com/MaruonVHS/status/1491157499063726080"
            title="no name"
            thumbnail={thumbTwitter}
          >
            Twitter Post
          </GridItem>
          <GridItem
            href="https://sanitydanium.vercel.app/"
            title="Danium"
            thumbnail={thumbDanium}
          >
            Hosted App
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              color="white"
              bgColor={'#3500D3'}
            >
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
