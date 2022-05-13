import styles from '../styles/index.module.css'
import sharedStyles from '../styles/shared.module.css'
import {
  Button,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  Text,
  Container,
  Box,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import {
  SelfServiceLoginFlow,
  SubmitSelfServiceLoginFlowBody
} from '@ory/client'
import { AxiosError } from 'axios'
import type { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { generators } from 'openid-client'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import { createLogoutHandler, Flow } from '../pkg'
import { handleGetFlowError, handleFlowError } from '../pkg/errors'
import hydraAdmin from '../pkg/sdk/api/hydraAdmin'
import kratosBrowser from '../pkg/sdk/browser/kratos'
import bldclient, { BLDScope } from '../pkg/sdk/oauth2Client'

const Login: NextPage = (serverProps: any) => {
  const [mounted, setMounted] = useState(false)
  const breakpoint: any = useBreakpointValue({
    base: 'transparent',
    sm: 'bg-surface'
  })
  const headingBreakPointvalue: any = useBreakpointValue({
    base: 'xs',
    md: 'lg'
  })
  // const colorMode = useColorModeValue('md', 'md-dark') };

  useEffect(() => {
    setMounted(true)
  }, [])
  const [flow, setFlow] = useState<SelfServiceLoginFlow>()

  // Get ?flow=... from the URL
  const router = useRouter()
  const {
    return_to: returnTo,
    flow: flowId,
    // Refresh means we want to refresh the session. This is needed, for example, when we want to update the password
    // of a user.
    refresh,
    // AAL = Authorization Assurance Level. This implies that we want to upgrade the AAL, meaning that we want
    // to perform two-factor authentication/verification.
    aal,
    // The challenge is used to fetch information about the login request from ORY Hydra.
    login_challenge: challenge
  } = router.query

  // This might be confusing, but we want to show the user an option
  // to sign out if they are performing two-factor authentication!
  const onLogout = createLogoutHandler([aal, refresh])

  useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      kratosBrowser
        .getSelfServiceLoginFlow(String(flowId))
        .then(({ data }) => {
          setFlow(data)
        })
        .catch(handleGetFlowError(router, 'login', setFlow))
      return
    }
    // Otherwise we initialize it
    kratosBrowser
      .initializeSelfServiceLoginFlowForBrowsers(
        Boolean(refresh),
        aal ? String(aal) : undefined,
        `${serverProps.power_trade_url}/oauth?login_challenge=${challenge}&login_state=${serverProps.login_state}`
      )
      .then(({ data }) => {
        setFlow(data)
      })
      .catch(handleFlowError(router, 'login', setFlow))
  }, [
    flowId,
    router,
    router.isReady,
    aal,
    refresh,
    returnTo,
    flow,
    serverProps.power_trade_url,
    serverProps.login_state,
    challenge
  ])

  const onSubmit = (values: SubmitSelfServiceLoginFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // his data when she/he reloads the page.
      .push(`/login?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        kratosBrowser
          .submitSelfServiceLoginFlow(String(flow?.id), undefined, values)
          // We logged in successfully! Let's bring the user to hydra to fetch token.
          .then((res) => {
            window.location.href = `${serverProps.power_trade_url}/oauth?login_challenge=${challenge}&login_state=${serverProps.login_state}`
            return
          })
          .then(() => {})
          .catch(handleFlowError(router, 'login', setFlow))
          .catch((err: AxiosError) => {
            // If the previous handler did not catch the error it's most likely a form validation error
            if (err.response?.status === 400) {
              // Yup, it is!
              setFlow(err.response?.data)
              return
            }

            return Promise.reject(err)
          })
      )

  return (
    <div className={[sharedStyles.container, styles.pageColor].join(' ')}>
      <HeadComponent title="BLD PowerTrade - Sign In" />
      <div className={sharedStyles.main}>
        <Container
          maxW="lg"
          py={{ base: '12', md: '24' }}
          px={{ base: '0', sm: '8' }}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <div className={styles.title}>
                {(() => {
                  if (flow?.refresh) {
                    return 'Confirm Action'
                  } else if (flow?.requested_aal === 'aal2') {
                    return 'Two-Factor Authentication'
                  }
                  return (
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                      <Heading size={mounted ? headingBreakPointvalue : null}>
                        Log in to your account
                      </Heading>
                      <HStack spacing="1" justify="center">
                        <Text color="muted"> {`Don't have an account?`}</Text>
                        <Link href="/registration" passHref>
                          <Button variant="link" colorScheme="blue">
                            Sign up
                          </Button>
                        </Link>
                      </HStack>
                    </Stack>
                  )
                })()}
              </div>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={mounted ? breakpoint : null}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            backgroundColor="white"
          >
            <Flow onSubmit={onSubmit} flow={flow} />

            {aal || refresh ? (
              <div>
                <div data-testid="logout-link" onClick={onLogout}>
                  Log out
                </div>
              </div>
            ) : (
              <>
                {/* <div>
              <Link href="/registration" passHref>
                <div>Create account</div>
              </Link>
            </div> */}
                <HStack paddingTop={'10px'} justify={'right'}>
                  <Link href="/recovery" passHref>
                    <Button variant="link" colorScheme="blue" size="sm">
                      Forgot password?
                    </Button>
                  </Link>
                </HStack>
              </>
            )}
          </Box>
        </Container>
      </div>
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Parses the URL query
  const challenge: any = context.query.login_challenge
  // Fetch login_state in cookies
  const login_state = context.req.cookies['login_state']

  if (challenge !== undefined) {
    hydraAdmin
      .getLoginRequest(challenge)
      .then(({ data: body }) => {
        // If hydra was already able to authenticate the user, skip will be true and we do not need to re-authenticate
        // the user.
        if (body.skip) {
          // You can apply logic here, for example update the number of times the user logged in.
          // ...

          // Now it's time to grant the login request. You could also deny the request if something went terribly wrong
          // (e.g. your arch-enemy logging in...)
          return hydraAdmin
            .acceptLoginRequest(challenge, {
              // All we need to do is to confirm that we indeed want to log in the user.
              subject: String(body.subject)
            })
            .then(({ data: body }) => {
              // All we need to do now is to redirect the user back to hydra!
              return {
                redirect: {
                  permanent: false,
                  destination: String(body.redirect_to)
                },
                props: {}
              }
            })
        }
      })
      .catch(() => {})
  } else {
    // No challenge has been found, so we need redirect to hydra to start a new authorization flow
    const state = generators.state()
    context.res.setHeader('set-cookie', [`login_state=${state}`])
    const authUrl = await bldclient.authorizationUrl({
      scope: BLDScope,
      state
    })
    return {
      redirect: {
        permanent: false,
        destination: authUrl
      },
      props: {}
    }
  }

  return {
    props: {
      login_state: login_state ? login_state : null,
      power_trade_url: process.env.BLD_POWERTRADE_URL
    }
  }
}

export default Login
