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
import router from 'next/router'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'
import { useSession } from 'next-auth/react'

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

const futureLoad = [
  {
    x: '00:00',
    y: 2690
  },
  {
    x: '00:10',
    y: 2680
  },
  {
    x: '00:20',
    y: 2671.5
  },
  {
    x: '00:30',
    y: 2635.2
  },
  {
    x: '00:40',
    y: 2618.8
  },
  {
    x: '00:50',
    y: 2603.3
  },
  {
    x: '01:00',
    y: 2585.2
  },
  {
    x: '01:10',
    y: 2575.6
  },
  {
    x: '01:20',
    y: 2555.6
  },
  {
    x: '01:30',
    y: 2554.1
  },
  {
    x: '01:40',
    y: 2543.1
  },
  {
    x: '01:50',
    y: 2517.4
  },
  {
    x: '02:00',
    y: 2514.2
  },
  {
    x: '02:10',
    y: 2493
  },
  {
    x: '02:20',
    y: 2494.5
  },
  {
    x: '02:30',
    y: 2472.3
  },
  {
    x: '02:40',
    y: 2460.3
  },
  {
    x: '02:50',
    y: 2472.6
  },
  {
    x: '03:00',
    y: 2460.7
  },
  {
    x: '03:10',
    y: 2442
  },
  {
    x: '03:20',
    y: 2438.5
  },
  {
    x: '03:30',
    y: 2433.8
  },
  {
    x: '03:40',
    y: 2436.8
  },
  {
    x: '03:50',
    y: 2425.2
  },
  {
    x: '04:00',
    y: 2417.1
  },
  {
    x: '04:10',
    y: 2434.5
  },
  {
    x: '04:20',
    y: 2440.6
  },
  {
    x: '04:30',
    y: 2412.1
  },
  {
    x: '04:40',
    y: 2444.3
  },
  {
    x: '04:50',
    y: 2433.3
  },
  {
    x: '05:00',
    y: 2432
  },
  {
    x: '05:10',
    y: 2456.9
  },
  {
    x: '05:20',
    y: 2444.5
  },
  {
    x: '05:30',
    y: 2449.2
  },
  {
    x: '05:40',
    y: 2440.5
  },
  {
    x: '05:50',
    y: 2457.3
  },
  {
    x: '06:00',
    y: 2448.5
  },
  {
    x: '06:10',
    y: 2467.2
  },
  {
    x: '06:20',
    y: 2495.4
  },
  {
    x: '06:30',
    y: 2490
  },
  {
    x: '06:40',
    y: 2510.1
  },
  {
    x: '06:50',
    y: 2551.2
  },
  {
    x: '07:00',
    y: 2556.7
  },
  {
    x: '07:10',
    y: 2584.6
  },
  {
    x: '07:20',
    y: 2584.3
  },
  {
    x: '07:30',
    y: 2608.8
  },
  {
    x: '07:40',
    y: 2670.6
  },
  {
    x: '07:50',
    y: 2701.6
  },
  {
    x: '08:00',
    y: 2783.9
  },
  {
    x: '08:10',
    y: 2911.4
  },
  {
    x: '08:20',
    y: 2973.4
  },
  {
    x: '08:30',
    y: 2996.6
  },
  {
    x: '08:40',
    y: 3032.4
  },
  {
    x: '08:50',
    y: 3066.8
  },
  {
    x: '09:00',
    y: 3104.1
  },
  {
    x: '09:10',
    y: 3133.6
  },
  {
    x: '09:20',
    y: 3133.8
  },
  {
    x: '09:30',
    y: 3154.8
  },
  {
    x: '09:40',
    y: 3175.3
  },
  {
    x: '09:50',
    y: 3197.6
  },
  {
    x: '10:00',
    y: 3207.3
  },
  {
    x: '10:10',
    y: 3215.5
  },
  {
    x: '10:20',
    y: 3231.8
  },
  {
    x: '10:30',
    y: 3263.8
  },
  {
    x: '10:40',
    y: 3276.8
  },
  {
    x: '10:50',
    y: 3286
  },
  {
    x: '11:00',
    y: 3312.4
  },
  {
    x: '11:10',
    y: 3310
  },
  {
    x: '11:20',
    y: 3314.6
  },
  {
    x: '11:30',
    y: 3311.2
  },
  {
    x: '11:40',
    y: 3340.5
  },
  {
    x: '11:50',
    y: 3308.7
  },
  {
    x: '12:00',
    y: 3234.8
  },
  {
    x: '12:10',
    y: 3142.9
  },
  {
    x: '12:20',
    y: 3147.3
  },
  {
    x: '12:30',
    y: 3154.4
  },
  {
    x: '12:40',
    y: 3139.4
  },
  {
    x: '12:50',
    y: 3162.6
  },
  {
    x: '13:00',
    y: 3199.2
  },
  {
    x: '13:10',
    y: 3256.7
  },
  {
    x: '13:20',
    y: 3322.3
  },
  {
    x: '13:30',
    y: 3306.5
  },
  {
    x: '13:40',
    y: 3334.7
  },
  {
    x: '13:50',
    y: 3346.1
  },
  {
    x: '14:00',
    y: 3364.1
  },
  {
    x: '14:10',
    y: 3365.8
  },
  {
    x: '14:20',
    y: 3362.2
  },
  {
    x: '14:30',
    y: 3349.6
  },
  {
    x: '14:40',
    y: 3369.7
  },
  {
    x: '14:50',
    y: 3373.6
  },
  {
    x: '15:00',
    y: 3375.8
  },
  {
    x: '15:10',
    y: 3345.3
  },
  {
    x: '15:20',
    y: 3363
  },
  {
    x: '15:30',
    y: 3362.4
  },
  {
    x: '15:40',
    y: 3359.4
  },
  {
    x: '15:50',
    y: 3346.2
  },
  {
    x: '16:00',
    y: 3342.4
  },
  {
    x: '16:10',
    y: 3352
  },
  {
    x: '16:20',
    y: 3346
  },
  {
    x: '16:30',
    y: 3319.3
  },
  {
    x: '16:40',
    y: 3339.2
  },
  {
    x: '16:50',
    y: 3331
  },
  {
    x: '17:00',
    y: 3284.3
  },
  {
    x: '17:10',
    y: 3300.5
  },
  {
    x: '17:20',
    y: 3350.3
  },
  {
    x: '17:30',
    y: 3400.2
  },
  {
    x: '17:40',
    y: 3450.3
  },
  {
    x: '17:50',
    y: 3500.4
  },
  {
    x: '18:00',
    y: 3550.8
  },
  {
    x: '18:10',
    y: 3600.3
  },
  {
    x: '18:20',
    y: 3650.7
  },
  {
    x: '18:30',
    y: 3660.5
  },
  {
    x: '18:40',
    y: 3700.8
  },
  {
    x: '18:50',
    y: 3690.3
  },
  {
    x: '19:00',
    y: 3670.5
  },
  {
    x: '19:10',
    y: 3650.9
  },
  {
    x: '19:20',
    y: 3630.2
  },
  {
    x: '19:30',
    y: 3600.6
  },
  {
    x: '19:40',
    y: 3550.2
  },
  {
    x: '19:50',
    y: 3500.2
  },
  {
    x: '20:00',
    y: 3450.5
  },
  {
    x: '20:10',
    y: 3200.7
  },
  {
    x: '20:20',
    y: 3158.5
  },
  {
    x: '20:30',
    y: 3132.6
  },
  {
    x: '20:40',
    y: 3120.8
  },
  {
    x: '20:50',
    y: 3077.1
  },
  {
    x: '21:00',
    y: 3074.3
  },
  {
    x: '21:10',
    y: 3055.1
  },
  {
    x: '21:20',
    y: 3040.8
  },
  {
    x: '21:30',
    y: 3029.2
  },
  {
    x: '21:40',
    y: 2992
  },
  {
    x: '21:50',
    y: 2981.4
  },
  {
    x: '22:00',
    y: 2930.4
  },
  {
    x: '22:10',
    y: 2929.1
  },
  {
    x: '22:20',
    y: 2898.2
  },
  {
    x: '22:30',
    y: 2892.5
  },
  {
    x: '22:40',
    y: 2884
  },
  {
    x: '22:50',
    y: 2867.6
  },
  {
    x: '23:00',
    y: 2867.5
  },
  {
    x: '23:10',
    y: 2819.1
  },
  {
    x: '23:20',
    y: 2812
  },
  {
    x: '23:30',
    y: 2791.4
  },
  {
    x: '23:40',
    y: 2749.4
  },
  {
    x: '23:50',
    y: 2744.3
  }
]


// <block:animation:1>
const totalDuration = 10000
const delayBetweenPoints = totalDuration / futureLoad.length
const previousY = (ctx: {
  index: number
  chart: {
    scales: { y: { getPixelForValue: (arg0: number) => any } }
    getDatasetMeta: (arg0: any) => {
      (): any
      new (): any
      data: {
        getProps: (
          arg0: string[],
          arg1: boolean
        ) => { (): any; new (): any; y: any }
      }[]
    }
  }
  datasetIndex: any
}) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart
        .getDatasetMeta(ctx.datasetIndex)
        .data[ctx.index - 1].getProps(['y'], true).y
// </block:animation>

// <block:config:0>

const Home: NextPage = () => {
  
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

        {/* <div style={{ marginBottom: '40px' }}>
          <Line data={config} width={1000} height={400} options={options} />
        </div> */}
      </main>
    </div>
  )
}


// This gets called on every request
export default Home
