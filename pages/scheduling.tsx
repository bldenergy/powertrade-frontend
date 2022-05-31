import styles from '../styles/shared.module.css'
import { Spinner } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

const Scheduling: NextPage = () => {
  let token: any
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('Xjdfnd') || undefined
  }
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [] = useState<boolean>(false)
  const [loading] = useState(true)

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
      <HeadComponent title="BLD PowerTrade - Scheduling..." />
      <main className={styles.main}>
        {!loading ? (
          <>
            <h1 className={styles.title}>{translate.scheduling.title}</h1>
            <p className={styles.description}>
              {translate.scheduling.subTitle}
            </p>
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


export default Scheduling
