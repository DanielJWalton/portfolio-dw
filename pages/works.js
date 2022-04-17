import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDanium from '../public/images/links/danium.png'
import thumbWebThree from '../public/images/works/web3.jpg'
import thumbHulu from '../public/images/works/hulu.jpg'
import thumbECom from '../public/images/works/e-com.jpg'
import thumbSpotify from '../public/images/works/spotify.jpg'
import thumbDaxon from '../public/images/works/daxon_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="web3"
            title="Web3 Minting"
            thumbnail={thumbWebThree}
          >
            NFT Minting App , utilizing ...
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="danium" title="Danium" thumbnail={thumbDanium}>
            Blog app utilizing...
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="hulu" title="Hulu" thumbnail={thumbHulu}>
            Hulu Clone
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="daxon" thumbnail={thumbDaxon} title="Daxon">
            Chat app utilizing...
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.6}>
          <WorkGridItem id="e-com" thumbnail={thumbECom} title="ECommerce">
            {' '}
            E-Commerce test store using FakerJs
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="spotify" thumbnail={thumbSpotify} title="Spotify">
            Spotify Clone
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
