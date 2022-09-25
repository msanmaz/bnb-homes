import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(501).end()
  }
  const query = req.query;
  const { houseId } = query;
  if (req.method === 'GET') { 
   const house = await prisma.Houses.findUnique({
        where:{
            id:houseId
        }, include:{
            images:{
                orderBy:[
                    {
                        id:'desc'
                    }
                ]
            }
        }
    })
    res.send(house)
    res.end()
  }
}