import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="danium">
    <Container>
      <Title>
        Danium <Badge>2022-</Badge>
      </Title>
      <P>A blog app , utilizing Next JS, Sanity, React Portable Text</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sanitydanium.vercel.app/">
            https://sanitydanium.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Sanity</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/danium_post.png" alt="Danium" />
      <WorkImage src="/images/works/danium_comm.png" alt="Danium" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
