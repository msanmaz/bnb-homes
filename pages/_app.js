import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { DarkModeProvider } from 'lib/context/darkModeContext'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return(
<DarkModeProvider><SessionProvider session={pageProps.session}>  {getLayout(<Component {...pageProps} />)}</SessionProvider></DarkModeProvider>
  ) 
}

export default MyApp
