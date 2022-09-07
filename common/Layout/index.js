import Head from 'next/head'
import NavBar from 'components/Navbar/nav-bar.js'


export default function Layout({
  children,

}) {
  return (
    <>
    <NavBar/>

      {children}

    </>
  )
}