import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle((props: ThemeProps) =>
//   globalStyles(props)
// )

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-testid="app-react">
      <div>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </div>
  )
}

export default MyApp
