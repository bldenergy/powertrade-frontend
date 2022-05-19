import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '../components/Layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </ChakraProvider>
  )
}

export default MyApp
