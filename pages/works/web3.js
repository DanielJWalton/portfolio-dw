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
  <Layout title="NFT Minting">
    <Container>
      <Title>
        Web3 Challenge <Badge>2022</Badge>
      </Title>
      <P>connecting to metamask allowing users to mint their nfts personally</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sanitydanium.vercel.app/">
            https://sanitydanium.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Objective-C, PHP, MongoDB</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/web3_01.png" alt="web3" />
        <WorkImage src="/images/works/web3_02.png" alt="web3" />
      </SimpleGrid>
      <WorkImage src="/images/works/web3_03.png" alt="web3" />
      <WorkImage src="/images/works/web3_04.png" alt="web3" />
      <WorkImage src="/images/works/web3_05.png" alt="web3" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
