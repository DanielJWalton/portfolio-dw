import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="spotify">
    <Container>
      <Title>
        Spotify Clone <Badge>2022</Badge>
      </Title>
      <P>Spotify Clone using Spotify Dev API</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/DanielJWalton/audioPlayer">
            https://github.com/DanielJWalton/audioPlayer{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Axios, React Dom</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/spotify.jpg" alt="spotify" />

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/spotify_01.jpg" alt="spotify" />
        <WorkImage src="/images/works/spotify_03.jpg" alt="spotify" />
        <WorkImage src="/images/works/spotify_02.jpg" alt="spotify" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
