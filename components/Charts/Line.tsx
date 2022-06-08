import styles from './footer.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import 'chartjs-adapter-luxon'
import StreamingPlugin from 'chartjs-plugin-streaming'
import zoomPlugin from 'chartjs-plugin-zoom'
import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  StreamingPlugin,
  zoomPlugin
)
const config: any = {
  datasets: [
    {
      label: 'Meter',
      backgroundColor: 'rgba(48, 128, 208, 0.35)',
      borderColor: '#088be0',
      cubicInterpolationMode: 'monotone',
      data: [],
      fill: 'start'
    }
  ]
}

export default function LineChart(meterWatt: any) {
  const onRefresh = (chart: { data: { datasets: any[] } }) => {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push({
        x: Date.now(),
        y: meterWatt.meterWatt
      })
    })
  }
  const options: any = {
    scales: {
      x: {
        grid: {
          display: false
        },
        type: 'realtime',
        realtime: {
          ttl: 86400000, // Data disappear in the chart after 24 hours
          duration: 20000,
          refresh: 1000,
          delay: 2000,
          onRefresh: onRefresh
        }
      },
      y: {
        title: {
          display: true,
          text: 'Watts'
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x'
        },
        zoom: {
          pinch: {
            enabled: true
          },
          wheel: {
            enabled: true
          },
          mode: 'x'
        },
        limits: {
          x: {
            minDelay: 100
            // maxDelay: 100,
            // minDuration: 10000,
            // maxDuration: 10000
          }
        }
      }
    }
  }

  return <Line data={config} width={1000} height={400} options={options} />
}
