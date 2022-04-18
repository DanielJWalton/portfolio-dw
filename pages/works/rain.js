import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="NoName">
    <Container>
      <Title>
        Ambience <Badge>2021</Badge>
      </Title>
      <P>3D project</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Blender, After Effects</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Octane, Photoshop, After Effects</span>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <video controls loop autoPlay>
            <source src="/images/works/rain_02.mp4" type="video/mp4" />
            Your browser does not support playing this Video
          </video>
        </ListItem>
        <br />
        <ListItem>
          <video controls loop autoPlay>
            <source src="/images/works/rain_01.mp4" type="video/mp4" />
            Your browser does not support playing this Video
          </video>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
