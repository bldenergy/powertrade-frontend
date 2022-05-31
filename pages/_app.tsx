import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '../components/Layout/layout'
import Auth from '../middleware/Auth'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router: { route }
}: AppProps) {
  const requireAuth =
    // route.includes('/power-consumption') ||
    // route.includes('/trading') ||
    // route.includes('/scheduling')
    !route.includes('/auth')

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Layout>
          {requireAuth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
