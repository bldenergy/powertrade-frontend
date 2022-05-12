import styles from '../styles/shared.module.css'
import { AxiosError } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import AppContext from '../AppContext'
import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'
import kratosBrowser from '../pkg/sdk/browser/kratos'

const Consumption: NextPage = (serverProps: any) => {
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

  // Kratos Session
  useEffect(() => {
    kratosBrowser
      .toSession()
      .then(({ data }) => {
        setSession(JSON.stringify(data, null, 2))
        setHasSession(true)
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 403:
          // This is a legacy error code thrown. See code 422 for
          // more details.
          case 422:
            // This status code is returned when we are trying to
            // validate a session which has not yet completed
            // it's second factor
            return router.push('/login?aal=aal2')
          case 401:
            // do nothing, the user is not logged in
            return
        }

        // Something else happened!
        return Promise.reject(err)
      })
  }, [hasSession, router])

  // Verify wheter token exists, if yes then access this page, if no : check if Kratos session exits, esle redirect to login
  useEffect(() => {
    if (token === undefined) {
      if (hasSession) {
        router.push(
          `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
        )
      } else {
        router.push('/login')
      }
    }
  })

  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Power Consumption" />
      <main className={styles.main}>
        <h1 className={styles.title}>{translate.powerconsumption.title}</h1>
        <p className={styles.description}>
          {translate.powerconsumption.subTitle}
        </p>
      </main>
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ory_hydra_public_url: process.env.ORY_HYDRA_PUBLIC_URL
    }
  }
}

export default Consumption