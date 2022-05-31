import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { SessionProvider } from 'next-auth/react'
import Auth from '../middleware/Auth'

function MyApp({ Component, pageProps: { session, ...pageProps }, router: { route } }: AppProps) {
  const requireAuth = !route.startsWith("/auth");
  return (

<SessionProvider session={session}>
<ChakraProvider>
{/* Refer: https:github.com/nextauthjs/next-auth/issues/1210#issuecomment-866575527 */}
{requireAuth ? (
  <Auth>
    <Component {...pageProps} />
  </Auth>
) : (
  <Component {...pageProps} />
)}
</ChakraProvider>

</SessionProvider>
  )
}

export default MyApp
