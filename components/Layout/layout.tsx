import Header from '../Header/header';
import Navigation from '../Navigation/navigation';
import layoutStyles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={layoutStyles.container}>{children}</main>
      <Navigation />
    </>
  );
}
