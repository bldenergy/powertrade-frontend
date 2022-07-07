import Layout from '../components/Layout/layout';
import { firebaseCloudMessaging } from '../firebase/firebase';
import Auth from '../middleware/Auth';
import '../styles/globals.css';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router: { route },
}: AppProps) {
  const requireAuth = !route.includes('/auth');

  // useEffect(() => {
  //   setToken();
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.addEventListener('message', (event) =>
  //       console.log('event for the service worker', event.data)
  //     );
  //   }
  //   async function setToken() {
  //     try {
  //       const token = await firebaseCloudMessaging.init();
  //       if (token) {
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // });

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
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
  );
}

export default MyApp;
