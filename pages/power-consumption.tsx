import styles from '../styles/shared.module.css'
import { Spinner } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

const Consumption: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh

  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Power Consumption" />
      <main className={styles.main}>
        <>
          <h1 className={styles.title}>{translate.powerconsumption.title}</h1>
          <p className={styles.description}>
            {translate.powerconsumption.subTitle}
          </p>
        </>
      </main>
    </div>
  )
}

// This gets called on every request
// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       ory_hydra_public_url: process.env.ORY_HYDRA_PUBLIC_URL
//     }
//   }
// }

export default Consumption
