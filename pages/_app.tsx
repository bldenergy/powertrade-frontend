import '../styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppContext from '../AppContext'
import { AuthGuard } from '../components/AuthGuard/AuthGuard'
import Layout from '../components/Layout/layout'
import darkTheme from '../styles/theme/darkTheme'
import lightTheme from '../styles/theme/lightTheme'
import createEmotionCache from '../utility/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: {
  Component: any
  emotionCache?: EmotionCache | undefined
  pageProps: any
}) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <Layout>
          {/* <AuthGuard> */}
          <Component {...pageProps} />
          {/* </AuthGuard> */}
        </Layout>
        <ToastContainer />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
