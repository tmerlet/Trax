import { Box } from '@chakra-ui/layout'
import SideBar from './Sidebar'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" backgroundColor="red">
        <SideBar />
      </Box>
      <Box marginLeft="250px" mb="100px" backgroundColor="blue">
        {children}
      </Box>
      <Box
        position="absolute"
        left="0"
        bottom="0"
        height="100px"
        backgroundColor="purple"
      >
        player
      </Box>
    </Box>
  )
}

export default PlayerLayout
