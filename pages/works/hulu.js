import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="hulu">
    <Container>
      <Title>
        Hulu Clone <Badge>2022</Badge>
      </Title>
      <P>Using the tmdb library to recreate Hulu&apos;s sleek UI design</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link color="#735FD3" href="https://julu-dw.vercel.app/">
            https://julu-dw.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, TailwindCSS, React</span>
        </ListItem>
      </List>

      {/* <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage src="/images/works/hulu.jpg" alt="hulu" />
      <WorkImage src="/images/works/hulu_01.jpg" alt="hulu" />
      <WorkImage src="/images/works/hulu_02.jpg" alt="hulu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
