import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(501).end()
  }

  const { room,caption,m2,livingR,kitchen,bathR,carpark,location,price,heating,type,url,description } = req.body
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
        m2:m2,
        caption:caption,
        description:description
      },
    })
    res.send(tweet)
    res.end()
  }


}