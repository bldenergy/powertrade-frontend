import styles from '../styles/shared.module.css'
import type { NextPage } from 'next'
import router from 'next/router'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

const Trading: NextPage = () => {
  const { locale } = router
  const translate = locale === 'en' ? en : zh

  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Trading" />
      <main className={styles.main}>
        <>
          <h1 className={styles.title}>{translate.trading.title}</h1>
          <p className={styles.description}>{translate.trading.subTitle}</p>
        </>
      </main>
    </div>
  )
}

// This gets called on every request
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       ory_hydra_public_url: process.env.ORY_HYDRA_PUBLIC_URL
//     }
//   }
// }
export default Trading