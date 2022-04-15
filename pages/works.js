import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDanium from '../public/images/links/danium.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbDaxon from '../public/images/works/daxon_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="danium" title="Danium" thumbnail={thumbDanium}>
            A blog app , utilizing Next JS, Sanity, React Portable Text
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="CatPages"
            title="CatPages"
            thumbnail={thumbWalknote}
          >
            Facebook clone, utilzing...
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="Hulu" title="Hulu" thumbnail={thumbFourPainters}>
            Hulu Clone
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Web3" thumbnail={thumbMenkiki} title="Web3">
            NFT Minting Site
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
          <WorkGridItem id="daxon" thumbnail={thumbDaxon} title="Daxon">
            Easy to use chat app with Google authentication
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="Insta" thumbnail={thumbModeTokyo} title="Insta">
            Instagram Clone
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
