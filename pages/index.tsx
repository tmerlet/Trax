import { Box, Text, Flex, Image } from '@chakra-ui/react'
import GradientLayout from '../components/GradientLayout'
import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  const { user } = useMe()

  return (
    <GradientLayout
      color="purple"
      subtitle="profile"
      title={user && `${user?.firstName} ${user?.lastName}`}
      description={
        user?.playlistCount && `${user.playlistCount} public playlists`
      }
      img="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU="
      roundImage
    >
      <Box color="white" px="40px">
        <Box mb="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="sm">only visible to you</Text>
        </Box>
        <Flex>
          {artists?.map((artist) => (
            <Box paddingLeft="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="http://placekitten.com/g/300/300"
                  borderRadius="100%"
                />
                <Box mt="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="xs">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return { props: { artists } }
}

export default Home
