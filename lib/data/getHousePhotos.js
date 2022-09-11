

export const getHouse = async(id,prisma) => {
    const post = await prisma.Houses.findUnique({
        where:{
            id:id
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