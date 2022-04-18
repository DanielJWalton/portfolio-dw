import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Portal">
    <Container>
      <Title>
        Open Portal<Badge>2021</Badge>
      </Title>
      <P>
        3D modeling project inspired by game machines i used growing up, mixed
        with a futuristic portal concept
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
          <WorkImage src="/images/works/portal_01.png" alt="portal" />

          <WorkImage src="/images/works/portal_02.png" alt="portal" />
          <WorkImage src="/images/works/portal_03.png" alt="portal" />
        </ListItem>

        <br />
        <ListItem>
          <WorkImage src="/images/works/portal_04.png" alt="portal" />
          <WorkImage src="/images/works/portal_05.png" alt="portal" />
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
