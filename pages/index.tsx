import styles from '../styles/shared.module.css'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh

  return (
    <div className={styles.container}>
      <HeadComponent title={translate.home.title} />

      <main className={styles.main}>
        <>
          <h1 className={styles.title}>{translate.home.title}</h1>
          <p className={styles.description}>{translate.home.subTitle}</p>
        </>
      </main>
    </div>
  )
}

export default Home
