import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="NoName">
    <Container>
      <Title>
        no name <Badge>2021</Badge>
      </Title>
      <P>3D project</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Blender</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Octane, Photoshop, After Effects</span>
        </ListItem>
      </List>
      <List ml={4} my={4}>
        <ListItem>
          <video controls loop autoPlay>
            <source src="/images/works/noname_vid.mp4" type="video/mp4" />
            Your browser does not support playing this Video
          </video>
        </ListItem>
        <br />
        <ListItem>
          <WorkImage src="/images/works/noname_01.png" alt="pc" />
          <WorkImage src="/images/works/noname_02.png" alt="pc" />
          <WorkImage src="/images/works/noname_03.png" alt="pc" />
          <WorkImage src="/images/works/noname_04.png" alt="pc" />
        </ListItem>
      </List>
    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'
