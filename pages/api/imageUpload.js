import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(501).end()
  }

  const { image,id,imageId} = req.body
  console.log(req.body)
  if (req.method === 'POST') { 
    const imgUpload = await prisma.Images.create({
      data:{
        url:image,
        imageId:imageId,
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