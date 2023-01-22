import { Box, Flex, Text } from '@chakra-ui/react'

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box padding="20px" color="white" width="30%">
          <Text fontSize="lg">Song Name</Text>
          <Text fontSize="sm">artist name</Text>
        </Box>
        <Box color="white" width="40%">
          <Text fontSize="lg">Controls</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar
