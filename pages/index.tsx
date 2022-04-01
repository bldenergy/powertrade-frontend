import type { NextPage } from 'next';
import styles from '../styles/shared.module.css';
import HeadComponent from '../components/head';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade" />
      <main className={styles.main}>
        <h1 className={styles.title}>BLD PowerTrade</h1>
        <p className={styles.description}>Save Energy and Get Paid.</p>
      </main>
    </div>
  );
};

export default Home;
