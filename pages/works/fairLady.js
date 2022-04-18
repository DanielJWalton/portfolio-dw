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
          <WorkImage src="/images/works/fairLady.png" alt="fairLady" />
          <Meta>Top View</Meta>

          <WorkImage src="/images/works/fairLadyVSide.png" alt="fairLady" />
          <Meta>Side View</Meta>
          <P>
            From this angle the illusion is broke and you are able to see the
            height difference being mapped
          </P>
          <br />
          <WorkImage src="/images/works/ladyBW.png" alt="fairLady" />
          <Meta>Height Map</Meta>
          <P>Height Map being passed into geometry nodes to map the Z Height</P>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
