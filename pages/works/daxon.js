import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="daxon">
    <Container>
      <Title>
        Daxon <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/daxon.png" alt="icon" />
      </Center>
      <P>Chat app running on firebase storage and hosting.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>

          <Link href="https://daxon-clone.web.app/">
            https://daxon-clone.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>Simply login in with Google and go</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Redux, Firebase, Styled Components</span>
        </ListItem>

        <ListItem>
          <Meta>Last update</Meta>
          <span>4/11/2022</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/daxon_chatbox.jpg" alt="daxon" />
      <WorkImage src="/images/works/daxon_sidebar.jpg" alt="daxo" />

      <WorkImage src="/images/works/daxon_eyecatch.png" alt="daxon" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
