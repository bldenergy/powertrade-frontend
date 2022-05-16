import styles from '../styles/index.module.css'
import sharedStyles from '../styles/shared.module.css'
import {
  Box,
  Button,
  Heading,
  HStack,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import {
  SelfServiceVerificationFlow,
  SubmitSelfServiceVerificationFlowBody
} from '@ory/client'
import { AxiosError } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import { Flow } from '../pkg'
import kratosBrowser from '../pkg/sdk/browser/kratos'

const Verification: NextPage = (serverProps: any) => {
  const [flow, setFlow] = useState<SelfServiceVerificationFlow>()
  const [mounted, setMounted] = useState(false)
  const breakpoint: any = useBreakpointValue({
    base: 'transparent',
    sm: 'bg-surface'
  })
  const headingBreakPointvalue: any = useBreakpointValue({
    base: 'xs',
    md: 'lg'
  })
  // Get ?flow=... from the URL
  const router = useRouter()
  const { flow: flowId, return_to: returnTo } = router.query

  useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      kratosBrowser
        .getSelfServiceVerificationFlow(String(flowId))
        .then(({ data }) => {
          setFlow(data)
        })
        .catch((err: AxiosError) => {
          switch (err.response?.status) {
            case 410:
            // Status code 410 means the request has expired - so let's load a fresh flow!
            case 403:
              // Status code 403 implies some other issue (e.g. CSRF) - let's reload!
              return router.push('/verification')
          }

          throw err
        })
      return
    }

    // Otherwise we initialize it
    kratosBrowser
      .initializeSelfServiceVerificationFlowForBrowsers(
        returnTo ? String(returnTo) : undefined
      )
      .then(({ data }) => {
        setFlow(data)
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 400:
            // Status code 400 implies the user is already signed in
            return router.push('/')
        }

        throw err
      })
  }, [flowId, router, router.isReady, returnTo, flow])

  const onSubmit = (values: SubmitSelfServiceVerificationFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // his data when she/he reloads the page.
      .push(`/verification?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        kratosBrowser
          .submitSelfServiceVerificationFlow(
            String(flow?.id),
            undefined,
            values
          )
          .then(({ data }) => {
            // Form submission was successful, show the message to the user!
            setFlow(data)
          })
          .catch((err: AxiosError) => {
            switch (err.response?.status) {
              case 400:
                // Status code 400 implies the form validation had an error
                setFlow(err.response?.data)
                return
            }

            throw err
          })
      )

  return (
    <div className={[sharedStyles.container, styles.pageColor].join(' ')}>
      <HeadComponent title="BLD PowerTrade - Verify your account" />
      <div className={sharedStyles.main}>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={mounted ? breakpoint : null}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
          backgroundColor="white"
        >
          <Heading size={mounted ? headingBreakPointvalue : null}>
            Verify your account
          </Heading>
          <Flow onSubmit={onSubmit} flow={flow} />

          <HStack paddingTop={'15px'} justify={'right'}>
            <Link href="/account" passHref>
              <Button variant="link" colorScheme="blue" size="sm">
                Go back
              </Button>
            </Link>
          </HStack>
        </Box>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      previous_url: context.req.headers.referer
    }
  }
}

export default Verification
