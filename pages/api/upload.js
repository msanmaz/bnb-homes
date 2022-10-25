import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(501).end()
  }
  if (req.method === 'POST') { 
    const { room,caption,m2,livingR,kitchen,bathR,carpark,location,price,heating,type,url,description } = req.body
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
        image:url,
        metrekare:m2,
        caption:caption,
        description:description
      },
    })
    res.send(tweet)
    res.end()
  }


}