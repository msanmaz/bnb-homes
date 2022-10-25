import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !=='DELETE') {
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
    if(imgUpload){
      res.json({success:'All Images Uplaoded!'})
      res.end()
    }
    res.json({success:'Encountered With An Error!'})
    res.end()

  }


  if(req.method === 'DELETE'){
  const del =  await prisma.Images.deleteMany({})
  if(del){
    res.send(del)
    res.end()  
  }

  }
}