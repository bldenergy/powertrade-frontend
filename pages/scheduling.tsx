import type { NextPage } from 'next';
import styles from '../styles/shared.module.css';
import HeadComponent from '../components/head';

const Scheduling: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Scheduling" />
      <main className={styles.main}>
        <h1 className={styles.title}>Scheduling</h1>
        <p className={styles.description}>
          Choose the best time that suits you.
        </p>
      </main>
    </div>
  );
};

export default Scheduling;
