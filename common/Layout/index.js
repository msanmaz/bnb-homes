import Head from 'next/head'
import NavBar from 'components/Navbar/nav-bar.js'
import MobilePhone from 'common/Mobile/mobile-phone'
import Footer from 'common/Footer/foot-er'


export default function Layout({
  children,

}) {
  return (
    <>
    <NavBar/>

      {children}
    <MobilePhone/>
    <Footer/>
    </>
  )
}