import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="FairLady">
    <Container>
      <Title>
        Fair Lady <Badge>2021</Badge>
      </Title>
      <P>
        3D project using black and white height map to create a gradient color
        based on the height of the mesh from 0-1 Z
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
          <WorkImage src="/images/works/texaco_01.png" alt="arcade" />
          <WorkImage src="/images/works/texaco_04.png" alt="arcade" />
          <WorkImage src="/images/works/texaco_05.png" alt="arcade" />

          <WorkImage src="/images/works/texaco_02.png" alt="arcade" />
          <WorkImage src="/images/works/texaco_03.png" alt="arcade" />

          <br />
        </ListItem>
      </List>
    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'
