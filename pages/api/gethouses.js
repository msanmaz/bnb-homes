import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(501).end()
  }

  console.log(req.body)
  if (req.method === 'GET') { 
    const houses = await prisma.Houses.findMany({
        where: {},
        orderBy: [
          {
            caption: 'asc',
          },
        ]
      })
    res.send(houses)
    res.end()
  }
}