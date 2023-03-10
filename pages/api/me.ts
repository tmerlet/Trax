import { validateRoute } from '../../lib/auth'
import prisma from '../../lib/prisma'

export default validateRoute(async (req, res, user) => {
  console.log('user: ', user)

  const playlistCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  })

  console.log('playlistCount: ', playlistCount)
  res.json({ ...user, playlistCount })
})
