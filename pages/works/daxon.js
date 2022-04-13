import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="daxon">
    <Container>
      <Title>
        amembo <Badge>2005-2008</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/daxon.png" alt="icon" />
      </Center>
      <P>
        P2P private file sharing tool with MSN Messenger integration for Windows
      </P>
      <P>
        "Amembo" that can share P2P folders with specific users in cooperation
        with "MSN Messenger"「Amembo」
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          File transfer can be done at high speed without size restrictions.
        </ListItem>
        <ListItem>
          You can communicate between multiple computers at the same time.
        </ListItem>
        <ListItem>
          The easy connection function automatically performs troublesome
          connection work.。
        </ListItem>
        <ListItem>
          A powerful protocol that enables various communications by opening
          only one port.
        </ListItem>
        <ListItem>
          Equipped with IM function. You can also view photos during a
          conversation.
        </ListItem>
        <ListItem>
          With the file sharing function, you can show the set public folder to
          the other party.
        </ListItem>
        <ListItem>
          You can connect by invitation from MSN / Windows Messenger.
        </ListItem>
        <ListItem>
          With the screen transfer function, you can show your desktop to the
          other party.
        </ListItem>
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
