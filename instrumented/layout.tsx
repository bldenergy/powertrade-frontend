// Custom components
import Header from './header';
import Footer from './footer';
// Layout Style
import layoutStyles from '../styles/layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={layoutStyles.container}>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}
