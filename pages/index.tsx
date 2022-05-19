import styles from '../styles/shared.module.css'
import { AxiosError } from 'axios'
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
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import en from '../locales/en'
import zh from '../locales/zh'
import { createLogoutHandler } from '../pkg'
import kratosBrowser from '../pkg/sdk/browser/kratos'

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

const presentLoad = [
  {
    x: '00:00',
    y: 2693.1
  },
  {
    x: '00:10',
    y: 2673.7
  },
  {
    x: '00:20',
    y: 2679.1
  },
  {
    x: '00:30',
    y: 2630
  },
  {
    x: '00:40',
    y: 2620.3
  },
  {
    x: '00:50',
    y: 2610.9
  },
  {
    x: '01:00',
    y: 2595.2
  },
  {
    x: '01:10',
    y: 2570.3
  },
  {
    x: '01:20',
    y: 2567.4
  },
  {
    x: '01:30',
    y: 2563.6
  },
  {
    x: '01:40',
    y: 2538.4
  },
  {
    x: '01:50',
    y: 2517.4
  },
  {
    x: '02:00',
    y: 2519.3
  },
  {
    x: '02:10',
    y: 2507.5
  },
  {
    x: '02:20',
    y: 2486.9
  },
  {
    x: '02:30',
    y: 2501.7
  },
  {
    x: '02:40',
    y: 2492.3
  },
  {
    x: '02:50',
    y: 2471.1
  },
  {
    x: '03:00',
    y: 2463
  },
  {
    x: '03:10',
    y: 2473.1
  },
  {
    x: '03:20',
    y: 2469.9
  },
  {
    x: '03:30',
    y: 2465.9
  },
  {
    x: '03:40',
    y: 2456.4
  },
  {
    x: '03:50',
    y: 2450.3
  },
  {
    x: '04:00',
    y: 2436
  },
  {
    x: '04:10',
    y: 2457.8
  },
  {
    x: '04:20',
    y: 2449.2
  },
  {
    x: '04:30',
    y: 2451.1
  },
  {
    x: '04:40',
    y: 2444.1
  },
  {
    x: '04:50',
    y: 2444.3
  },
  {
    x: '05:00',
    y: 2444
  },
  {
    x: '05:10',
    y: 2452.5
  },
  {
    x: '05:20',
    y: 2463.2
  },
  {
    x: '05:30',
    y: 2465.6
  },
  {
    x: '05:40',
    y: 2453
  },
  {
    x: '05:50',
    y: 2475.2
  },
  {
    x: '06:00',
    y: 2483.4
  },
  {
    x: '06:10',
    y: 2491.6
  },
  {
    x: '06:20',
    y: 2494.9
  },
  {
    x: '06:30',
    y: 2529.9
  },
  {
    x: '06:40',
    y: 2536.6
  },
  {
    x: '06:50',
    y: 2551.3
  },
  {
    x: '07:00',
    y: 2543.2
  },
  {
    x: '07:10',
    y: 2578.5
  },
  {
    x: '07:20',
    y: 2615.2
  },
  {
    x: '07:30',
    y: 2637.2
  },
  {
    x: '07:40',
    y: 2670.6
  },
  {
    x: '07:50',
    y: 2719.1
  },
  {
    x: '08:00',
    y: 2814.9
  },
  {
    x: '08:10',
    y: 2945.8
  },
  {
    x: '08:20',
    y: 3016.6
  },
  {
    x: '08:30',
    y: 3041.4
  },
  {
    x: '08:40',
    y: 3044.9
  },
  {
    x: '08:50',
    y: 3077.7
  },
  {
    x: '09:00',
    y: 3106.8
  },
  {
    x: '09:10',
    y: 3123.4
  },
  {
    x: '09:20',
    y: 3128.7
  },
  {
    x: '09:30',
    y: 3141.7
  },
  {
    x: '09:40',
    y: 3150.2
  },
  {
    x: '09:50',
    y: 3179.7
  },
  {
    x: '10:00',
    y: 3159.1
  },
  {
    x: '10:10',
    y: 3159.5
  },
  {
    x: '10:20',
    y: 3180.7
  },
  {
    x: '10:30',
    y: 3219.1
  },
  {
    x: '10:40',
    y: 3199.5
  },
  {
    x: '10:50',
    y: 3203.4
  },
  {
    x: '11:00',
    y: 3211.8
  },
  {
    x: '11:10',
    y: 3227.2
  },
  {
    x: '11:20',
    y: 3228.1
  },
  {
    x: '11:30',
    y: 3222.2
  },
  {
    x: '11:40',
    y: 3248.9
  },
  {
    x: '11:50',
    y: 3197
  },
  {
    x: '12:00',
    y: 3128.2
  },
  {
    x: '12:10',
    y: 3039.3
  },
  {
    x: '12:20',
    y: 3025.7
  },
  {
    x: '12:30',
    y: 3019
  },
  {
    x: '12:40',
    y: 3007.8
  },
  {
    x: '12:50',
    y: 3014.8
  },
  {
    x: '13:00',
    y: 3072.2
  },
  {
    x: '13:10',
    y: 3169.7
  },
  {
    x: '13:20',
    y: 3184.7
  },
  {
    x: '13:30',
    y: 3183.1
  },
  {
    x: '13:40',
    y: 3213.6
  },
  {
    x: '13:50',
    y: 3224.3
  },
  {
    x: '14:00',
    y: 3223.3
  },
  {
    x: '14:10',
    y: 3235.6
  },
  {
    x: '14:20',
    y: 3233.3
  },
  {
    x: '14:30',
    y: 3222.6
  },
  {
    x: '14:40',
    y: 3224.2
  },
  {
    x: '14:50',
    y: 3253.2
  },
  {
    x: '15:00',
    y: 3244.1
  },
  {
    x: '15:10',
    y: 3251.7
  },
  {
    x: '15:20',
    y: 3232
  },
  {
    x: '15:30',
    y: 3242
  },
  {
    x: '15:40',
    y: 3239.4
  },
  {
    x: '15:50',
    y: 3246.1
  },
  {
    x: '16:00',
    y: 3234.6
  },
  {
    x: '16:10',
    y: 3245.8
  },
  {
    x: '16:20',
    y: 3235.5
  },
  {
    x: '16:30',
    y: 3227.4
  },
  {
    x: '16:40',
    y: 3240.9
  },
  {
    x: '16:50',
    y: 3226.3
  },
  {
    x: '17:00',
    y: 3182.7
  },
  {
    x: '17:10',
    y: 3173.2
  },
  {
    x: '17:20',
    y: 3156.8
  },
  {
    x: '17:30',
    y: 3153.8
  },
  {
    x: '17:40',
    y: 3135.8
  },
  {
    x: '17:50',
    y: 3158.2
  },
  {
    x: '18:00',
    y: 3148.8
  },
  {
    x: '18:10',
    y: 3159.8
  },
  {
    x: '18:20',
    y: 3140.9
  },
  {
    x: '18:30',
    y: 3148.7
  },
  {
    x: '18:40',
    y: 3167.5
  },
  {
    x: '18:50',
    y: 3148
  },
  {
    x: '19:00',
    y: 3138.1
  },
  {
    x: '19:10',
    y: 3140.9
  },
  {
    x: '19:20',
    y: 3128.3
  },
  {
    x: '19:30',
    y: 3096.1
  },
  {
    x: '19:40',
    y: 3088.5
  },
  {
    x: '19:50',
    y: 3082.1
  },
  {
    x: '20:00',
    y: 3066.4
  },
  {
    x: '20:10',
    y: 3061.1
  },
  {
    x: '20:20',
    y: 3060.7
  },
  {
    x: '20:30',
    y: 3035
  },
  {
    x: '20:40',
    y: 3007.2
  },
  {
    x: '20:50',
    y: 2993.4
  },
  {
    x: '21:00',
    y: 2958.9
  },
  {
    x: '21:10',
    y: 2948.7
  },
  {
    x: '21:20',
    y: 2931.2
  },
  {
    x: '21:30',
    y: 2918.2
  },
  {
    x: '21:40',
    y: 2902.7
  },
  {
    x: '21:50',
    y: 2883.9
  },
  {
    x: '22:00',
    y: 2846.5
  },
  {
    x: '22:10',
    y: 2823
  },
  {
    x: '22:20',
    y: 2807.5
  },
  {
    x: '22:30',
    y: 2772.9
  },
  {
    x: '22:40',
    y: 2764.9
  },
  {
    x: '22:50',
    y: 2767.8
  },
  {
    x: '23:00',
    y: 2740.1
  },
  {
    x: '23:10',
    y: 2710.9
  },
  {
    x: '23:20',
    y: 2677
  },
  {
    x: '23:30',
    y: 2674.5
  },
  {
    x: '23:40',
    y: 2644.3
  },
  {
    x: '23:50',
    y: 2625.8
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
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx: { type: string; xStarted: boolean; index: number }) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0
      }
      ctx.xStarted = true
      return ctx.index * delayBetweenPoints
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx: { type: string; yStarted: boolean; index: number }) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0
      }
      ctx.yStarted = true
      return ctx.index * delayBetweenPoints
    }
  }
}
// </block:animation>

// <block:config:0>

const Home: NextPage = (serverProps: any) => {
  let token: any
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('Xjdfnd') || undefined
  }
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [hasSession, setHasSession] = useState<boolean>(false)

  // Kratos Session
  useEffect(() => {
    kratosBrowser
      .toSession()
      .then(({ data }) => {
        setSession(JSON.stringify(data, null, 2))
        setHasSession(true)
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 403:
          // This is a legacy error code thrown. See code 422 for
          // more details.
          case 422:
            // This status code is returned when we are trying to
            // validate a session which has not yet completed
            // it's second factor
            return router.push('/login?aal=aal2')
          case 401:
            // do nothing, the user is not logged in
            return
        }

        // Something else happened!
        return Promise.reject(err)
      })
  }, [hasSession, router])

  // Verify wheter token exists, if yes then access this page, if no : check if Kratos session exits, esle redirect to login
  useEffect(() => {
    if (token === undefined) {
      if (hasSession) {
        router.push(
          `${serverProps.ory_hydra_public_url}/oauth2/sessions/logout`
        )
      } else {
        router.push('/login')
      }
    }
  })

  return (
    <div className={styles.container}>
      <HeadComponent title={translate.home.title} />
      <main className={styles.main}>
        <h1 className={styles.title}>{translate.home.title}</h1>
        <p className={styles.description}>{translate.home.subTitle}</p>
        {/* <div style={{ marginBottom: '40px' }}>
          <Line data={config} width={1000} height={400} options={options} />
        </div> */}
        <div className={styles.authSection}>
          <button
            data-testid="recover-account"
            data-href="/recovery"
            disabled={hasSession}
            title="Recover Account"
            onClick={() => (window.location.href = '/recovery')}
          >
            Recover Account {hasSession}
          </button>
          <button
            data-testid="verify-account"
            data-href="/verification"
            title="Verify Account"
            onClick={() => (window.location.href = '/verification')}
          >
            Verify Account
          </button>
          <button
            data-testid="account-settings"
            data-href="/settings"
            disabled={!hasSession}
            title={'Account Settings'}
            onClick={() => (window.location.href = '/settings')}
          >
            Account Settings
          </button>
        </div>
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
export default Home
