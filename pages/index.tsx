import styles from '../styles/shared.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import type { GetServerSideProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import router from 'next/router'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const Home: NextPage = () => {
  // const { locale } = router
  const translate = zh

  return (
    <div className={styles.container}>
      <HeadComponent title={translate.home.title} />

      <main className={styles.main}>
        <>
          <h1 className={styles.title}>{translate.home.title}</h1>
          <p className={styles.description}>{translate.home.subTitle}</p>
        </>

        {/* <div style={{ marginBottom: '40px' }}>
          <Line data={config} width={1000} height={400} options={options} />
        </div> */}
      </main>
    </div>
  )
}

// This gets called on every request
export default Home
