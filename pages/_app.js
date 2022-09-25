import React from 'react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { DarkModeProvider } from 'lib/context/darkModeContext'
import {Router} from 'next/router'
import BackDrop from 'common/Backdrop/back-drop'
import { SelectProvider } from 'lib/context/housesContext'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return(
<>
{
  loading ? <BackDrop isOpen={loading}/> : <SelectProvider><DarkModeProvider><SessionProvider session={pageProps.session}>  {getLayout(<Component {...pageProps} />)}</SessionProvider></DarkModeProvider></SelectProvider>
}

</>
  ) 
}

export default MyApp
