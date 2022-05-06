import styles from '../styles/account.module.css'
import sharedStyles from '../styles/shared.module.css'
import { AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'
import kratosBrowser from '../pkg/sdk/browser/kratos'

const Account: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [hasSession, setHasSession] = useState<boolean>(false)

  useEffect(() => {
    kratosBrowser
      .toSession()
      .then(({ data }) => {
        setSession(JSON.stringify(data, null, 2))
        setHasSession(true)
        console.log(hasSession)
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
  })

  return (
    <div className={sharedStyles.container}>
      <HeadComponent title="BLD PowerTrade - Account" />
      <main className={sharedStyles.main}>
        <h1 className={sharedStyles.title}>{translate.account.title}</h1>
        <p className={sharedStyles.description}>{translate.account.subTitle}</p>
        <div className={styles.account}>
          <button
            data-testid="verify-account"
            data-href="/verification"
            title="Verify Account"
            onClick={(event) => (window.location.href = '/verification')}
          >
            Verify Account
          </button>
          <button
            data-testid="account-settings"
            data-href="/settings"
            disabled={!hasSession}
            title={'Account Settings'}
            onClick={(event) => (window.location.href = '/settings')}
          >
            Account Settings
          </button>
        </div>
      </main>
    </div>
  )
}

export default Account
