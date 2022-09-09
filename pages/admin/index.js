import React, { useState } from 'react'
import Layout from 'common/Layout'
import { getSession, signOut,getProviders } from 'next-auth/react'
import HouseUpload from 'components/HouseUpload/house-upload'
import RentalUpload from 'components/RentalUpload/rental-upload'
import Login from 'components/Login/user-login'
import Link from 'next/link'
import prisma from 'lib/prisma'
import HouseFinder from 'components/HouseFinder/house-finder'
import { useContext } from 'react'
import { DarkModeContext } from "lib/context/darkModeContext"


const Admin = ({ session,houses }) => {
    if (!session || !session.user) return <Login />
    return (
        <>
            <SideBar houses={houses} />
        </>
    )
}




const SideBar = ({houses}) => {
    const { view,setView,toggleAdminChange } = useContext(DarkModeContext)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content max-w-full md:max-w-auto flex flex-col items-center px-4 md:px-0">
            <div className='fixed bottom-[3%] flex flex-row z-20 bg-purple-500 rounded-lg right-[10%]'>
            <label htmlFor="my-drawer-2" className="btn btn-ghost rounded-full drawer-button lg:hidden">Menu</label>
            <div className='divider'></div>
            <button onClick={()=> signOut()} className="btn btn-ghost rounded-full lg:hidden">Logout</button>

            </div>
            {
                view === 'Satilik' &&  <HouseUpload/>
            }
            {
                view === 'Kiralik' &&  <RentalUpload/>
            }
            {
                view === 'Show' &&  <HouseFinder houses={houses}/>
            }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-gray-200 rounded-lg p-4 overflow-y-auto w-80 text-base-content">
                    <li className='futuraMedium text-[#161616]' onClick={()=> toggleAdminChange('Satilik')}><a>Satilik Ev Ekle</a></li>
                    <li className='futuraMedium text-[#161616]' onClick={()=> toggleAdminChange('Kiralik')}><a>Kiralik Ev Ekle</a></li>
                    <li className='futuraMedium text-[#161616]'  onClick={()=> toggleAdminChange('Show')}><a>Evleri Goster</a></li>
                    <Link href='/'><li className='futuraMedium text-[#161616]'><a>Anasayfaya Git</a></li></Link>

                </ul>

            </div>
        </div>
    )
}


Admin.getLayout = (page) => {
    return <Layout title={'404'}>{page}</Layout>
}



export async function getServerSideProps(context) {
    const session = await getSession(context);
    let houses = await prisma.Houses.findMany()
    houses = JSON.parse(JSON.stringify(houses))
    return {
        props: {
            houses,
            session
        }
    }
}


export default Admin
