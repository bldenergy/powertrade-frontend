import styles from '../styles/shared.module.css'
import { AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'
import ory from '../pkg/sdk'

const Scheduling: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [hasSession, setHasSession] = useState<boolean>(false)

  useEffect(() => {
    ory
      .toSession()
      .then(({ data }) => {
        setSession(JSON.stringify(data, null, 2))
        setHasSession(true)
        // console.log(hasSession)
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

    // console.log(session
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

export default Scheduling
