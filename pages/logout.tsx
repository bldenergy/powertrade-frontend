import sharedStyles from '../styles/shared.module.css'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import Slide from '@mui/material/Slide'
import type { NextPage, GetServerSideProps } from 'next'
import router from 'next/router'
import * as React from 'react'

import HeadComponent from '../components/head'
import hydraAdmin from '../pkg/sdk/api/hydraAdmin'
import kratosApi from '../pkg/sdk/api/kratos'

const Transition: any = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/no-children-prop
  return <Slide children={<></>} direction="up" ref={ref} {...props} />
})
const Logout: NextPage = (serverProps: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef: any = React.useRef()

  React.useEffect(() => {
    onOpen()
  }, [onOpen])

  const handleCancel = () => {
    router.push(serverProps.previous_url)
  }

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('Xjdfnd')
      localStorage.removeItem('Mchvdh')
      localStorage.removeItem('Lbcdjb')
    }
    router.push(`${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`)
  }

  return (
    <div className={sharedStyles.container}>
      <HeadComponent title="BLD PowerTrade - Profile Management and Security Settings" />
      <div className={sharedStyles.main}>
        <AlertDialog
          closeOnOverlayClick={false}
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Logout
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to logout?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={handleCancel}>
                  No
                </Button>
                <Button colorScheme="red" onClick={handleLogout} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  const challenge: any = context.query.logout_challenge
  // Parses the URL query
  if (challenge !== undefined) {
    try {
      // Hydra Logout Process
      const { data: getLogoutRequestResponse } =
        await hydraAdmin.getLogoutRequest(challenge, {
          headers: context.req.headers
        })
      //   console.log('getLogoutRequestResponse', getLogoutRequestResponse)
      const { data: acceptLogoutRequestReponse } =
        await hydraAdmin.acceptLogoutRequest(challenge, {
          headers: context.req.headers
        })
      //   console.log('acceptLogoutRequestReponse', acceptLogoutRequestReponse)

      //   console.log(
      //     'acceptLogoutRequestReponse.redirect_to',
      //     acceptLogoutRequestReponse.redirect_to
      //   )
      ///////////////////////////////////////////////////////////

      // Kratos Logout Process

      kratosApi
        .createSelfServiceLogoutFlowUrlForBrowsers('', {
          headers: context.req.headers
        })
        .then(({ data }) => {
          //   console.log(data)
          if (data.logout_token) {
            // console.log('Yeah')
            kratosApi.submitSelfServiceLogoutFlow(data.logout_token, '', {
              headers: context.req.headers
            })
          }
        })
        .catch((err: any) => {
          //   console.log(err)
          switch (err.response?.status) {
            case 401:
              // do nothing, the user is not logged in
              return
          }

          // Something else happened!
          return Promise.reject(err)
        })

      ///////////////////////////////////////////////////////////
      return {
        redirect: {
          permanent: false,
          destination: acceptLogoutRequestReponse.redirect_to
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

      //   console.log(err)
      // Something else happened!
    }
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
  return {
    props: {
      ory_hydra_public_url: process.env.ORY_HYDRA_PUBLIC_URL,
      previous_url: context.req.headers.referer
    }
  }
}

export default Logout
