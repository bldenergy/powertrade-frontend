import styles from '../styles/shared.module.css'
import { Spinner } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

const Consumption: NextPage = () => {
  let token: any
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('Xjdfnd') || undefined
  }
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [] = useState<boolean>(false)
  const [loading] = useState(true)

  // Verify wheter token exists, if yes then access this page, if no : check if Kratos session exits, esle redirect to login
  useEffect(() => {
    // if (token === undefined) {
    //   checkLogout(
    //     hasSession,
    //     `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
    //   )
    // } else {
    //   try {
    //     const decodeToken: any = jwt_decode(token)
    //     if (!decodeToken.hasOwnProperty('client_id')) {
    //       checkLogout(
    //         hasSession,
    //         `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
    //       )
    //     }
    //   } catch (err) {
    //     checkLogout(
    //       hasSession,
    //       `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
    //     )
    //   }
    // }

    // const powerUsageService = new PowerUsageServiceClient(
    //   `http://${window.location.hostname}:8081`,
    //   null,
    //   null
    // )
    // var request = new GetPowerUsageRequest()
    // const call = powerUsageService.getPowerUsage(
    //   request,
    //   { 'custom-header-1': 'value1' },
    //   (err: grpcWeb.RpcError, response: PowerUsage) => {
    //     console.log(err)
    //     console.log(response.toObject())
    //   }
    // )
    // call.on('status', (status: grpcWeb.Status) => {
    //   console.log(status)
    // })

    // // var get60TicksPowerUsageRequest = new Get60TicksPowerUsageRequest()
    // // const streamCall = powerUsageService.get60TicksPowerUsage(get60TicksPowerUsageRequest, {});
    // // streamCall.on('data', (resp: PowerUsage) => {
    // //   console.log(resp);
    // // });
    // // streamCall.on('end', () => {
    // //   console.log("It's the end");
    // // });
  })

  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Power Consumption" />
      <main className={styles.main}>
        {!loading ? (
          <>
            <h1 className={styles.title}>{translate.powerconsumption.title}</h1>
            <p className={styles.description}>
              {translate.powerconsumption.subTitle}
            </p>
          </>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#088be0"
            size="xl"
          />
        )}
      </main>
    </div>
  )
}


// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      ory_hydra_public_url: process.env.ORY_HYDRA_PUBLIC_URL
    }
  }
}

export default Consumption
