import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(501).end()
  }

  const { room,caption,livingR,kitchen,bathR,carpark,location,price,heating,type,url,description } = req.body
  if (req.method === 'POST') { 
   const tweet = await prisma.Houses.create({
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
        image:url,
        caption:caption,
        description:description
      },
    })
    res.send(tweet)
    res.end()
  }


}