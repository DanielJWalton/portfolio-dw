import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="arcade">
    <Container>
      <Title>
        Arcade Cabinet <Badge>2021</Badge>
      </Title>
      <P>
        3D modeling project inspired by game machines i used growing up, mixed
        with a futuristic arcade concept
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Blender</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Octane, Photoshop</span>
        </ListItem>
      </List>
      <List ml={4} my={4}>
        <ListItem>
          <WorkImage src="/images/works/arcade_01.png" alt="arcade" />
          <Meta>Textures</Meta>
          <span>
            (Textures)
            <br />
            <Link
              color="lightblue"
              href="https://www.artstation.com/artwork/4X9VLk"
            >
              {' '}
              https://www.artstation.com/artwork/4X9VLk
            </Link>
            <br />
            <Link
              color="lightblue"
              href="https://www.artstation.com/artwork/oNX9B"
            >
              {' '}
              https://www.artstation.com/artwork/oNX9B
            </Link>
          </span>
          <WorkImage src="/images/works/arcade_02.png" alt="arcade" />
          <WorkImage src="/images/works/arcade_03.png" alt="arcade" />
        </ListItem>

        <P>Street Fighter on the screen</P>
        <br />
        <ListItem>
          <WorkImage src="/images/works/arcade_04.png" alt="arcade" />
          <WorkImage src="/images/works/arcade_05.png" alt="arcade" />
          <WorkImage src="/images/works/arcade_06.png" alt="arcade" />
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
