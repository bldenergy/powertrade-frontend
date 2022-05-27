import styles from '../styles/shared.module.css'
import { Spinner } from '@chakra-ui/react'
import jwt_decode from 'jwt-decode'
import type { GetServerSideProps, NextPage } from 'next'
import router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

const Trading: NextPage = (serverProps: any) => {
  let token: any
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('Xjdfnd') || undefined
  }

  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [hasSession, setHasSession] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  // Verify wheter token exists, if yes then access this page, if no : check if Kratos session exits, esle redirect to login
  useEffect(() => {
    // if (token === undefined) {
    //   checkLogout(
    //     hasSession,
    //     `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
    //   )
    // } else {
    //   try {
    //     const decodeToken: any = jwt_decode(token)
    //     if (!decodeToken.hasOwnProperty('client_id')) {
    //       checkLogout(
    //         hasSession,
    //         `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
    //       )
    //     }
    //   } catch (err) {
    //     checkLogout(
    //       hasSession,
    //       `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
    //     )
    //   }
    // }
  })
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Trading" />
      <main className={styles.main}>
        {!loading ? (
          <>
            <h1 className={styles.title}>{translate.trading.title}</h1>
            <p className={styles.description}>{translate.trading.subTitle}</p>
          </>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#088be0"
            size="xl"
          />
        )}
      </main>
    </div>
  )
}

function checkLogout(hasSession: any, redirect: any) {
  if (hasSession) {
    router.push(redirect)
  } else {
    router.push('/login')
  }
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ory_hydra_public_url: process.env.ORY_HYDRA_PUBLIC_URL
    }
  }
}
export default Trading
