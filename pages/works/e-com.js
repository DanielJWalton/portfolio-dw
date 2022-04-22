import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="e-com">
    <Container>
      <Title>
        E-Commerce <Badge>2021</Badge>
      </Title>
      <P>
        Using FakerJs to practice hitting an api and with mapping and filtering
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            color="lightblue"
            href="https://github.com/DanielJWalton/e-commerce-prac"
          >
            https://github.com/DanielJWalton/e-commerce-prac{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Redux, React, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/e-com.jpg" alt="e-com" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/e-com_01.jpg" alt="e-com" />
        <WorkImage src="/images/works/e-com_02.jpg" alt="e-com" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
