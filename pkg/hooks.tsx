import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect, DependencyList } from 'react'

import kratosBrowser from './sdk/browser/kratos'

// Returns a function which will log the user out
export function createLogoutHandler(deps?: DependencyList) {
  const [logoutToken, setLogoutToken] = useState<string>('')
  const router = useRouter()
  useEffect(() => {
    kratosBrowser
      .createSelfServiceLogoutFlowUrlForBrowsers()
      .then(({ data }) => {
        // console.log(data)
        setLogoutToken(data.logout_token)
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 401:
            // do nothing, the user is not logged in
            return
        }

        // Something else happened!
        return Promise.reject(err)
      })
  }, deps)

  return () => {
    if (logoutToken) {
      console.log('Yeah')
      kratosBrowser
        .submitSelfServiceLogoutFlow(logoutToken)
        .then(() => router.push('/login'))
        .then(() => router.reload())
    }
  }
}
