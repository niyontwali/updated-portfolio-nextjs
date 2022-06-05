import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import {useState} from 'react'
import NProgress from 'nprogress'
import Loader from '../components/Loader'
import '../styles/globals.css'

NProgress.configure({showSpinner: false})

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
    setLoading(true);
  })
  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
    setLoading(false);
  })

  return (
  <ThemeProvider enableSystem={true} attribute="class">
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
    </Head>
    {loading
      ? <Loader />
      : <Component {...pageProps} />
    }
  </ThemeProvider>)
}

export default MyApp
