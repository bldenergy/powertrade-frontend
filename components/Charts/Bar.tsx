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
import { Bar } from 'react-chartjs-2'

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
  labels: ['Mon', 'Tue', 'Wed', 'Thu'],
  datasets: [
    {
      label: 'Real Time Usage',
      backgroundColor: 'rgba(48, 128, 208, 0.35)',
      borderColor: '#088be0',
      cubicInterpolationMode: 'monotone',
      data: [3, 4, 2, 7],

      borderWidth: 2,
      borderRadius: 200,
      borderSkipped: false,
      barPercentage: 0.05
    }
  ]
}

const options: any = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      },
      title: {
        display: true,
        text: 'Watts'
      }
    }
  },
  interaction: {
    intersect: false
  }
}
export default function BarChart() {
  return <Bar data={config} width={1000} height={400} options={options} />
}
