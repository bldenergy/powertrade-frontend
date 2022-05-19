import styles from '../styles/index.module.css'
import sharedStyles from '../styles/shared.module.css'
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import {
  SelfServiceRegistrationFlow,
  SubmitSelfServiceRegistrationFlowBody
} from '@ory/client'
import { AxiosError } from 'axios'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
// Import render helpers
import { Flow } from '../pkg'
import { handleFlowError } from '../pkg/errors'
// Import the SDK
import kratosBrowser from '../pkg/sdk/browser/kratos'

// Renders the registration page
const Registration: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const breakpoint: any = useBreakpointValue({
    base: 'transparent',
    sm: 'bg-surface'
  })
  const headingBreakPointvalue: any = useBreakpointValue({
    base: 'xs',
    md: 'lg'
  })

  // The "flow" represents a registration process and contains
  // information about the form we need to render (e.g. username + password)
  const [flow, setFlow] = useState<SelfServiceRegistrationFlow>()

  // Get ?flow=... from the URL
  const { flow: flowId, return_to: returnTo } = router.query

  useEffect(() => {
    setMounted(true)
  }, [])

  // In this effect we either initiate a new registration flow, or we fetch an existing registration flow.
  useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      kratosBrowser
        .getSelfServiceRegistrationFlow(String(flowId))
        .then(({ data }) => {
          // We received the flow - let's use its data and render the form!
          setFlow(data)
        })
        .catch(handleFlowError(router, 'registration', setFlow))
      return
    }

    // Otherwise we initialize it
    kratosBrowser
      .initializeSelfServiceRegistrationFlowForBrowsers(
        returnTo ? String(returnTo) : undefined
      )
      .then(({ data }) => {
        setFlow(data)
      })
      .catch(handleFlowError(router, 'registration', setFlow))
  }, [flowId, router, router.isReady, returnTo, flow])

  const onSubmit = (values: SubmitSelfServiceRegistrationFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // his data when she/he reloads the page.
      .push(`/registration?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        kratosBrowser
          .submitSelfServiceRegistrationFlow(String(flow?.id), values)
          .then(({ data }) => {
            // If we ended up here, it means we are successfully signed up!
            //
            // You can do cool stuff here, like having access to the identity which just signed up:
            console.log('This is the user session: ', data, data.identity)

            // For now however we just want to redirect home!
            return router.push(flow?.return_to || '/').then(() => {})
          })
          .catch(handleFlowError(router, 'registration', setFlow))
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
      <HeadComponent title="BLD PowerTrade - Sign Up" />
      <div className={sharedStyles.main}>
        <Container
          maxW="lg"
          py={{ base: '12', md: '24' }}
          px={{ base: '0', sm: '8' }}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <div className={styles.title}>
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                  <Heading size={mounted ? headingBreakPointvalue : null}>
                    Create Account
                  </Heading>
                  <HStack spacing="1" justify="center">
                    <Text color="muted"> {`Have an account?`}</Text>
                    <Link href="/login" passHref>
                      <Button variant="link" colorScheme="blue">
                        Login
                      </Button>
                    </Link>
                  </HStack>
                </Stack>
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
          </Box>
        </Container>
      </div>
    </div>
  )
}

export default Registration
