import styles from '../styles/index.module.css'
import sharedStyles from '../styles/shared.module.css'
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import {
  SelfServiceRecoveryFlow,
  SubmitSelfServiceRecoveryFlowBody
} from '@ory/client'
import { AxiosError } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import { Flow } from '../pkg'
import { handleFlowError } from '../pkg/errors'
import kratosBrowser from '../pkg/sdk/browser/kratos'

const Recovery: NextPage = (serverProps: any) => {
  const [mounted, setMounted] = useState(false)
  const [flow, setFlow] = useState<SelfServiceRecoveryFlow>()
  const headingBreakPointvalue: any = useBreakpointValue({
    base: 'xs',
    md: 'lg'
  })
  const breakpoint: any = useBreakpointValue({
    base: 'transparent',
    sm: 'bg-surface'
  })
  // Get ?flow=... from the URL
  const router = useRouter()
  const { flow: flowId, return_to: returnTo } = router.query
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      kratosBrowser
        .getSelfServiceRecoveryFlow(String(flowId))
        .then(({ data }) => {
          setFlow(data)
        })
        .catch(handleFlowError(router, 'recovery', setFlow))
      return
    }

    // Otherwise we initialize it
    kratosBrowser
      .initializeSelfServiceRecoveryFlowForBrowsers()
      .then(({ data }) => {
        setFlow(data)
      })
      .catch(handleFlowError(router, 'recovery', setFlow))
      .catch((err: AxiosError) => {
        // If the previous handler did not catch the error it's most likely a form validation error
        if (err.response?.status === 400) {
          // Yup, it is!
          setFlow(err.response?.data)
          return
        }

        return Promise.reject(err)
      })
  }, [flowId, router, router.isReady, returnTo, flow])

  const onSubmit = (values: SubmitSelfServiceRecoveryFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // his data when she/he reloads the page.
      .push(`/recovery?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        kratosBrowser
          .submitSelfServiceRecoveryFlow(String(flow?.id), undefined, values)
          .then(({ data }) => {
            // Form submission was successful, show the message to the user!
            setFlow(data)
          })
          .catch(handleFlowError(router, 'recovery', setFlow))
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
      <HeadComponent title="BLD PowerTrade - Sign In" />
      <main className={sharedStyles.main}>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={mounted ? breakpoint : null}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
          backgroundColor="white"
        >
          <div>
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={mounted ? headingBreakPointvalue : null}>
                Recover your account
              </Heading>
            </Stack>

            <Flow onSubmit={onSubmit} flow={flow} />
          </div>
          <div>
            <HStack paddingTop={'15px'} justify={'right'}>
              <Link href={serverProps.previous_url} passHref>
                <Button variant="link" colorScheme="blue" size="sm">
                  Go back
                </Button>
              </Link>
            </HStack>
          </div>
        </Box>
      </main>
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

export default Recovery
