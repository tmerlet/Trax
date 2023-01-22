import { Box } from '@chakra-ui/layout'
import PlayerBar from './PlayerBar'
import SideBar from './Sidebar'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" backgroundColor="red">
        <SideBar />
      </Box>
      <Box marginLeft="250px" mb="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0" height="100px" width="100%">
        <PlayerBar />
      </Box>
    </Box>
  )
}

export default PlayerLayout
