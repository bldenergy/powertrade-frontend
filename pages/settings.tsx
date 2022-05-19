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
  SelfServiceSettingsFlow,
  SubmitSelfServiceSettingsFlowBody
} from '@ory/client'
import { AxiosError } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import { Flow, Methods, Messages } from '../pkg'
import { handleFlowError } from '../pkg/errors'
import kratosBrowser from '../pkg/sdk/browser/kratos'

interface Props {
  flow?: SelfServiceSettingsFlow
  only?: Methods
}

function SettingsCard({
  flow,
  only,
  children
}: Props & { children: ReactNode }) {
  if (!flow) {
    return null
  }

  const nodes = only
    ? flow.ui.nodes.filter(({ group }) => group === only)
    : flow.ui.nodes

  if (nodes.length === 0) {
    return null
  }

  return <div>{children}</div>
}

const Settings: NextPage = (serverProps: any) => {
  const [flow, setFlow] = useState<SelfServiceSettingsFlow>()
  const [mounted, setMounted] = useState(false)
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
    // If the router is not ready yet, or we already have a flow, do nothing.
    if (!router.isReady || flow) {
      return
    }

    // If ?flow=.. was in the URL, we fetch it
    if (flowId) {
      kratosBrowser
        .getSelfServiceSettingsFlow(String(flowId))
        .then(({ data }) => {
          setFlow(data)
        })
        .catch(handleFlowError(router, 'settings', setFlow))
      return
    }

    // Otherwise we initialize it
    kratosBrowser
      .initializeSelfServiceSettingsFlowForBrowsers(
        returnTo ? String(returnTo) : undefined
      )
      .then(({ data }) => {
        setFlow(data)
      })
      .catch(handleFlowError(router, 'settings', setFlow))
  }, [flowId, router, router.isReady, returnTo, flow])

  const onSubmit = (values: SubmitSelfServiceSettingsFlowBody) =>
    router
      // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
      // his data when she/he reloads the page.
      .push(`/settings?flow=${flow?.id}`, undefined, { shallow: true })
      .then(() =>
        kratosBrowser
          .submitSelfServiceSettingsFlow(String(flow?.id), undefined, values)
          .then(({ data }) => {
            // The settings have been saved and the flow was updated. Let's show it to the user!
            setFlow(data)
          })
          .catch(handleFlowError(router, 'settings', setFlow))
          .catch(async (err: AxiosError) => {
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
      <HeadComponent title="BLD PowerTrade - Profile Management and Security Settings" />
      <div className={sharedStyles.main}>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={mounted ? breakpoint : null}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
          backgroundColor="white"
          margin={'10px'}
        >
          <Heading size={mounted ? headingBreakPointvalue : null}>
            Profile Management and Security Settings
          </Heading>
          <SettingsCard only="profile" flow={flow}>
            <Heading as="h4" size="md" paddingTop={'30px'}>
              Profile Settings
            </Heading>
            <Messages messages={flow?.ui.messages} />
            <Flow
              hideGlobalMessages
              onSubmit={onSubmit}
              only="profile"
              flow={flow}
            />
          </SettingsCard>
          <SettingsCard only="password" flow={flow}>
            <Heading as="h4" size="md" paddingTop={'30px'}>
              Change Password
            </Heading>

            <Messages messages={flow?.ui.messages} />
            <Flow
              hideGlobalMessages
              onSubmit={onSubmit}
              only="password"
              flow={flow}
            />
          </SettingsCard>
          <SettingsCard only="oidc" flow={flow}>
            <Heading as="h4" size="md" paddingTop={'30px'}>
              Manage Social Sign In
            </Heading>

            <Messages messages={flow?.ui.messages} />
            <Flow
              hideGlobalMessages
              onSubmit={onSubmit}
              only="oidc"
              flow={flow}
            />
          </SettingsCard>
          <SettingsCard only="lookup_secret" flow={flow}>
            <Heading as="h4" size="md" paddingTop={'30px'}>
              Manage 2FA Backup Recovery Codes
            </Heading>
            <Messages messages={flow?.ui.messages} />
            <p>
              Recovery codes can be used in panic situations where you have lost
              access to your 2FA device.
            </p>

            <Flow
              hideGlobalMessages
              onSubmit={onSubmit}
              only="lookup_secret"
              flow={flow}
            />
          </SettingsCard>
          <SettingsCard only="totp" flow={flow}>
            <Heading as="h4" size="md" paddingTop={'30px'}>
              Manage 2FA TOTP Authenticator App
            </Heading>
            <p>
              Add a TOTP Authenticator App to your account to improve your
              account security. Popular Authenticator Apps are{' '}
              <a
                href="https://www.lastpass.com"
                rel="noreferrer"
                target="_blank"
              >
                LastPass
              </a>{' '}
              and Google Authenticator (
              <a
                href="https://apps.apple.com/us/app/google-authenticator/id388497605"
                target="_blank"
                rel="noreferrer"
              >
                iOS
              </a>
              ,{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                Android
              </a>
              ).
            </p>
            <Messages messages={flow?.ui.messages} />
            <Flow
              hideGlobalMessages
              onSubmit={onSubmit}
              only="totp"
              flow={flow}
            />
          </SettingsCard>
          <SettingsCard only="webauthn" flow={flow}>
            <Heading as="h4" size="md" paddingTop={'30px'}>
              Manage Hardware Tokens and Biometrics
            </Heading>
            <Messages messages={flow?.ui.messages} />
            <p>
              Use Hardware Tokens (e.g. YubiKey) or Biometrics (e.g. FaceID,
              TouchID) to enhance your account security.
            </p>
            <Flow
              hideGlobalMessages
              onSubmit={onSubmit}
              only="webauthn"
              flow={flow}
            />
          </SettingsCard>
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

export default Settings
