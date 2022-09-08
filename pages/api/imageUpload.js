import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(501).end()
  }

  const { image } = req.body
  console.log(req.body)
  if (req.method === 'POST') { 
   const tweet = await prisma.houses.create({
      data: {
        room: room,
        livingR:livingR,
        kitchen:kitchen,
        bathR:bathR,
        carpark:carpark,
        location:location,
        price:price,
        heating:heating,
        type:type,
        image:image,
        caption:caption
      },
    })
    res.send(tweet)
    res.end()
  }


  if (req.method === 'DELETE') {
		const id = req.body.caption

    const tweet = await prisma.houses.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    })

    if (tweet.author.id !== user.id) {
      res.status(401).end()
      return
    }

    await prisma.tweet.delete({
      where: { id },
    })
    res.status(200).end()
    return
  }


}