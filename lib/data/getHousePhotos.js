

export const getHouse = async(id,prisma) => {
    const post = await prisma.Houses.findUnique({
        where:{
            id:id
        }, include:{
            images:{
              orderBy:{
                imageId:'asc'
              }
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


  export const getBodrum = async (prisma) => {
    const houses = await prisma.Houses.findMany({
      where: {
        location:'Bodrum'
      },
      orderBy: [
        {
          caption: 'asc',
        },
      ]
    })
  
    return houses
  }

  export const getRental = async (prisma) => {
    const houses = await prisma.Houses.findMany({
      where: {
        type:'Kiralik'
      },
      orderBy: [
        {
          caption: 'asc',
        },
      ]
    })
  
    return houses
  }