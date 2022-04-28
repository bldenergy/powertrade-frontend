import { AxiosError } from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { createLogoutHandler } from '../pkg'
import ory from '../pkg/sdk'

const Home: NextPage = () => {
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [hasSession, setHasSession] = useState<boolean>(false)
  const router = useRouter()
  const onLogout = createLogoutHandler()

  useEffect(() => {
    ory
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
  })

  return (
    <div className={'container-fluid'}>
      <Head>
        <title>Ory NextJS Integration Example</title>
        <meta name="description" content="NextJS + React + Vercel + Ory" />
      </Head>

      <div>
        <div>Welcome to Ory!</div>
        <p>
          Welcome to the Ory Managed UI. This UI implements a run-of-the-mill
          user interface for all self-service flows (login, registration,
          recovery, verification, settings). The purpose of this UI is to help
          you get started quickly. In the long run, you probably want to
          implement your own custom user interface.
        </p>
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="box">
              <h3>Documentation</h3>
              <p>
                Here are some useful documentation pieces that help you get
                started.
              </p>
              <div className="row">
                <div
                  title="Get Started"
                  data-href="https://www.ory.sh/docs/get-started"
                  data-testid="get-started"
                />
                <div
                  title="User Flows"
                  data-href="https://www.ory.sh/docs/concepts/self-service"
                  data-testid="user-flows"
                />
                <div
                  title="Identities"
                  data-href="https://www.ory.sh/docs/concepts/identity"
                  data-testid="identities"
                />
                <div
                  title="Sessions"
                  data-href="https://www.ory.sh/docs/concepts/session"
                  data-testid="sessions"
                />
                <div
                  title="Bring Your Own UI"
                  data-href="https://www.ory.sh/docs/guides/bring-your-user-interface"
                  data-testid="customize-ui"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="box">
              <h3>Session Information</h3>
              <p>
                Below you will find the decoded Ory Session if you are logged
                in.
              </p>
              <div data-data-testid="session-content" data-code={session} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Other User Interface Screens</h2>
        <div className={'row'}>
          <button
            type="button"
            data-testid="login"
            data-href="/login"
            disabled={hasSession}
            title={'Login'}
            onClick={(event) => (window.location.href = '/login')}
          >
            Login
          </button>
          <button
            data-testid="sign-up"
            data-href="/registration"
            disabled={hasSession}
            title={'Sign Up'}
            onClick={(event) => (window.location.href = '/registration')}
          >
            Sign Up
          </button>
          <button
            data-testid="recover-account"
            data-href="/recovery"
            disabled={hasSession}
            title="Recover Account"
            onClick={(event) => (window.location.href = '/recovery')}
          >
            Recover Account
          </button>
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
          <button
            data-testid="logout"
            onClick={onLogout}
            aria-disabled="true"
            disabled={!hasSession}
            title={'Logout'}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
