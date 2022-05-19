import { AxiosError } from 'axios'
import type { NextPage, GetServerSideProps } from 'next'

import hydraAdmin from '../pkg/sdk/api/hydraAdmin'
import kratosApi from '../pkg/sdk/api/kratos'

const Oauth: NextPage = (serverProps) => {
  return <></>
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Parses the URL query
  const challenge: any = context.query.login_challenge

  if (challenge === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }

  try {
    const { data: kratosSession } = await kratosApi.toSession(
      undefined,
      undefined,
      { headers: context.req.headers }
    )
    const { data: hydraCompletedRequest } = await hydraAdmin.acceptLoginRequest(
      challenge,
      {
        // Subject is an alias for user ID. A subject can be a random string, a UUID, an email address, ....
        subject: kratosSession.identity.id,

        // This tells hydra to remember the browser and automatically authenticate the user in future requests. This will
        // set the "skip" parameter in the other route to true on subsequent requests!
        remember: true,

        // When the session expires, in seconds. Set this to 0 so it will never expire.
        remember_for: 3600,

        // Sets which "level" (e.g. 2-factor authentication) of authentication the user has. The value is really arbitrary
        // and optional. In the context of OpenID Connect, a value of 0 indicates the lowest authorization level.
        // acr: '0',
        //
        // If the environment variable CONFORMITY_FAKE_CLAIMS is set we are assuming that
        // the app is built for the automated OpenID Connect Conformity Test Suite. You
        // can peak inside the code for some ideas, but be aware that all data is fake
        // and this only exists to fake a login system which works in accordance to OpenID Connect.
        //
        // If that variable is not set, the ACR value will be set to the default passed here ('0')
        acr: '0'
      },
      { headers: context.req.headers }
    )
    // All we need to do now is to redirect the user back to hydra!
    return {
      redirect: {
        permanent: false,
        destination: hydraCompletedRequest.redirect_to
      },
      props: {}
    }
  } catch (err: any) {
    switch (err.response?.status) {
      case 403:
      // This is a legacy error code thrown. See code 422 for
      // more details.
      case 422:
        // This status code is returned when we are trying to
        // validate a session which has not yet completed
        // it's second factor
        return {
          redirect: {
            permanent: false,
            destination: '/login?aal=aal2'
          },
          props: {}
        }
      case 401:
        // do nothing, the user is not logged in
        return {
          redirect: {
            permanent: false,
            destination: '/login'
          },
          props: {}
        }
    }

    // Something else happened!
    return Promise.reject(err)
  }
}

export default Oauth
