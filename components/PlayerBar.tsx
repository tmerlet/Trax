import { Box, Flex, Text } from '@chakra-ui/react'
import { useStoreState } from 'easy-peasy'
import Player from './Player'

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs)
  const activeSong = useStoreState((state: any) => state.activeSong)
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <>
            <Box padding="20px" color="white" width="30%">
              <Text fontSize="lg">{activeSong.name}</Text>
              <Text fontSize="sm">{activeSong.artist.name}</Text>
            </Box>
            <Box color="white" width="40%">
              <Text fontSize="lg">
                <Player songs={songs} activeSong={activeSong} />
              </Text>
            </Box>
          </>
        ) : null}
      </Flex>
    </Box>
  )
}

export default PlayerBar
