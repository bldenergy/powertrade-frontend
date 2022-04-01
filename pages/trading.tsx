import type { NextPage } from 'next';
import styles from '../styles/shared.module.css';
import HeadComponent from '../components/head';

const Trading: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Trading" />
      <main className={styles.main}>
        <h1 className={styles.title}>Trading</h1>
        <p className={styles.description}>Save Energy and get Rewarded.</p>
      </main>
    </div>
  );
};

export default Trading;
