import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(501).end()
  }

  const { image,id } = req.body
  console.log(req.body)
  if (req.method === 'POST') { 
    const imgUpload = await prisma.Images.create({
      data:{
        url:image,
        house:{
          connect:{
            id: id
          }
        }
      }
    })
    res.send(imgUpload)
    res.end()
  }
}