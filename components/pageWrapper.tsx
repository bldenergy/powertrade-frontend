// Custom components
// Layout Style
import layoutStyles from '../styles/index.module.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: LayoutProps) {
  return (
    <>
      <div className={layoutStyles.pageWrapper}>
        <div>{children}</div>
      </div>
    </>
  )
}
