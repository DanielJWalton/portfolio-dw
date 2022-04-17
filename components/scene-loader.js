import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const SceneSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const SceneContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-pc"
    m="auto"
    mt={['-110px', '-180px', '-120px']}
    mb={['-130px', '-230px', '-200px']}
    w={[280 * 1.5, 480 * 1.5, 640]}
    h={[280 * 1.5, 480 * 1.5, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <SceneContainer>
      <SceneSpinner />
    </SceneContainer>
  )
}

export default Loader
