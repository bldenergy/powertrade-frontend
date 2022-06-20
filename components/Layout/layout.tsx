// Custom components
// Layout Style
import layoutStyles from './layout.module.css'

import Footer from '../Footer/footer'
import Header from '../Header/header'
import Navigation from '../Navigation/navigation'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={layoutStyles.container}>{children}</main>
      <Navigation />
    </>
  )
}
