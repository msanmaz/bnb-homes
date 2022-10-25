import React from 'react'
import EditHouse from 'components/HouseEdit/house-edit'
import Layout from 'common/Layout'
import { getSession,signOut } from 'next-auth/react'
import Link from 'next/link'
import prisma from 'lib/prisma'
import Login from 'components/Login/user-login'
import { getH } from 'lib/data/getHousePhotos'


const HouseName = ({session,house}) => {
  if (!session || !session.user) return <Login />

  return (
   <>
    <SideBar house={house}/>
    </>
  )
}

export default HouseName


const SideBar = ({house}) => {


  return (
      <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
          <div className='fixed top-[80%] right-[10%]'>
          <label htmlFor="my-drawer-2" className="btn btn-ghost rounded-full drawer-button lg:hidden">Menu</label>
          <button onClick={()=> signOut()} className="btn btn-ghost rounded-full lg:hidden">Logout</button>

          </div>
            <EditHouse house={house}/>
          </div>
          <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu bg-gray-200 rounded-lg p-4 overflow-y-auto w-80 text-base-content">
              <Link href='/admin'><li className='futuraMedium text-[#161616]'><a>Satilik Ev Ekle</a></li></Link>
              <Link href='/admin'><li className='futuraMedium text-[#161616]'><a>Kiralik Ev Ekle</a></li></Link>
              <Link href='/admin'><li className='futuraMedium text-[#161616]'><a>Evleri Goster</a></li></Link>
                  <Link href='/'><li className='futuraMedium text-[#161616]'><a>Anasayfaya Git</a></li></Link>

              </ul>

          </div>
      </div>
  )
}


HouseName.getLayout = (page) => {
  return <Layout title={'Photo Add | Attila Homes'}>{page}</Layout>
}


export async function getServerSideProps(context) {
  const getHouse = await getH(context.params.caption,prisma)

  const house = JSON.parse(JSON.stringify(getHouse))
 const session = await getSession(context);


  return {
      props: {
        session,
          house
      }
  }

  
}

