// Custom components
// Layout Style
import layoutStyles from './layout.module.css'

import Footer from '../Footer/footer'
import Header from '../Header/header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  // console.log(Token)
  return (
    <>
      <Header />
      {/* <Callback/> */}
      <main className={layoutStyles.container}>{children}</main>
      <Footer />
    </>
  )
}
