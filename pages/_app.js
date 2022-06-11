import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import {useState} from 'react'
import NProgress from 'nprogress'

import Layout from '../sections/Layout'
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
    {loading
      ? <Loader />
      : <Layout><Component {...pageProps} /></Layout>
    }
  </ThemeProvider>)
}

export default MyApp
