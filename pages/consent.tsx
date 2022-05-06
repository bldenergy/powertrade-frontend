import type { NextPage, GetServerSideProps } from 'next'

import kratosApi from '../pkg/sdk/api/kratos'
import hydraAdmin from '../pkg/sdk/api/hydraAdmin'

const Consent: NextPage = (serverProps) => {
  return (
    <></>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Parses the URL query
  const challenge = context.query.consent_challenge;

  // This section processes consent requests and either shows the consent UI or
  // accepts the consent request right away if the user has given consent to this
  // app before
  try {
    const { data: kratosSession } = await kratosApi.toSession(undefined, undefined, { headers: context.req.headers });
    const { data: consentRequest } = await hydraAdmin.getConsentRequest(challenge, { headers: context.req.headers })
    const { data: completedConsentRequest } = await hydraAdmin.acceptConsentRequest(
      challenge,
      {
        // We can grant all scopes that have been requested - hydra already checked for us that no additional scopes
        // are requested accidentally.
        grant_scope: consentRequest.requested_scope,

        // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.
        grant_access_token_audience: consentRequest.requested_access_token_audience,

        // The session allows us to set session data for id and access tokens
        session: {
          // This data will be available when introspecting the token. Try to avoid sensitive information here,
          // unless you limit who can introspect tokens.
          access_token: { username: kratosSession.identity.traits.username },
          // This data will be available in the ID token.
          id_token: { ...kratosSession.identity.traits },
        }
      },
      { headers: context.req.headers }
    )

    return {
      redirect: {
        permanent: false,
        destination: completedConsentRequest.redirect_to,
      },
      props: {},
    }
  } catch (err: AxiosError) {
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
            destination: '/login?aal=aal2',
          },
          props: {},
        }
      case 401:
        // do nothing, the user is not logged in
        return {
          redirect: {
            permanent: false,
            destination: '/login',
          },
          props: {},
        }
    }

    console.log(err);
    // Something else happened!
    return Promise.reject(err)
  }
}

export default Consent
