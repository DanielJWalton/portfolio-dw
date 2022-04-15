import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCar from '../public/images/contents/car.jpg'
import thumbD2Model from '../public/images/contents/d2model.jpg'
import thumbLady from '../public/images/contents/lady.jpg'
import thumbNoName from '../public/images/contents/noname.jpg'
import thumbOpen from '../public/images/contents/open.jpg'
import thumbRain from '../public/images/contents/rain.jpg'
import thumbTexaco from '../public/images/contents/texaco.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="no name - 3D Project (Modeling, Texturing, Lighting)"
            thumbnail={thumbNoName}
            href="https://twitter.com/MaruonVHS/status/1491157499063726080?s=20&t=RnLSuG-6v2ln_2t1L4rGnQ"
          />
          <GridItem
            title="open - 3D Project/Portal Concept "
            thumbnail={thumbOpen}
            href="https://twitter.com/MaruonVHS/status/1480721243485532161?s=20&t=RnLSuG-6v2ln_2t1L4rGnQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Ambience - 3D Animation/VFX/SFX"
            thumbnail={thumbRain}
            href="https://twitter.com/MaruonVHS/status/1478903390969098240?s=20&t=RnLSuG-6v2ln_2t1L4rGnQ"
          />
          <GridItem
            title="Perspective - 3D Height Map Art"
            thumbnail={thumbLady}
            href="https://twitter.com/MaruonVHS/status/1477751182957289473?s=20&t=RnLSuG-6v2ln_2t1L4rGnQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="CAR - 3D " thumbnail={thumbCar} />
          <GridItem
            title="Texaco - 3D Modeling, Texturing, Lighting"
            thumbnail={thumbTexaco}
          />
          <GridItem
            title="Destiny 2 Thumbnail - 3D Posing, Texturing, Lighting"
            thumbnail={thumbD2Model}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
