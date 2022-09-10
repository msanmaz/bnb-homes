

export const getHouse = async(caption,prisma) => {
    const post = await prisma.Houses.findUnique({
        where:{
            caption:caption
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
    return post
}


export const getHouses = async (prisma) => {
    const houses = await prisma.Houses.findMany({
      where: {},
      orderBy: [
        {
          caption: 'asc',
        },
      ]
    })
  
    return houses
  }