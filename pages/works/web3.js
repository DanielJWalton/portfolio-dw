import { Container, Badge, List, ListItem } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NFT Minting">
    <Container>
      <Title>
        Web3 Challenge <Badge>2022</Badge>
      </Title>
      <P>Connect to metamask allowing users to mint nfts personally.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            MetaMask Auth, Web3, NextJS, TypeScript, Sanity CMS, TailwindCSS,
            ThirdWeb
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/web3.jpg" alt="web3" />
      <WorkImage src="/images/works/mint.jpg" alt="web3" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
