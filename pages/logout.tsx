import styles from '../styles/shared.module.css'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import type { NextPage, GetServerSideProps } from 'next'
import router from 'next/router'
import { useEffect } from 'react'
import * as React from 'react'

import HeadComponent from '../components/head'
import hydraAdmin from '../pkg/sdk/api/hydraAdmin'
import kratosApi from '../pkg/sdk/api/kratos'

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/no-children-prop
  return <Slide children={<></>} direction="up" ref={ref} {...props} />
})
const Logout: NextPage = (serverProps: any) => {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  const handleCancel = () => {
    router.push(serverProps.previous_url)
  }

  const handleLogout = () => {
    setOpen(false)

    if (typeof window !== 'undefined') {
      localStorage.removeItem('Xjdfnd')
      localStorage.removeItem('Mchvdh')
      localStorage.removeItem('Lbcdjb')
    }

    router.push(`${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`)
  }

  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Power Consumption" />
      <main className={styles.main}>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleLogout}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{'Are you sure you want to logout?'}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>No</Button>
            <Button onClick={handleLogout}>Yes</Button>
          </DialogActions>
        </Dialog>
      </main>
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
      console.log('getLogoutRequestResponse', getLogoutRequestResponse)
      const { data: acceptLogoutRequestReponse } =
        await hydraAdmin.acceptLogoutRequest(challenge, {
          headers: context.req.headers
        })
      console.log('acceptLogoutRequestReponse', acceptLogoutRequestReponse)

      console.log(
        'acceptLogoutRequestReponse.redirect_to',
        acceptLogoutRequestReponse.redirect_to
      )
      ///////////////////////////////////////////////////////////

      // Kratos Logout Process

      kratosApi
        .createSelfServiceLogoutFlowUrlForBrowsers('', {
          headers: context.req.headers
        })
        .then(({ data }) => {
          console.log(data)
          if (data.logout_token) {
            console.log('Yeah')
            kratosApi.submitSelfServiceLogoutFlow(data.logout_token, '', {
              headers: context.req.headers
            })
          }
        })
        .catch((err: any) => {
          console.log(err)
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

      console.log(err)
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
