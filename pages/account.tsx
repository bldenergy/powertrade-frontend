import type { NextPage } from 'next';
import styles from '../styles/shared.module.css';
import HeadComponent from '../components/head';

const Account: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Account" />
      <main className={styles.main}>
        <h1 className={styles.title}>Account</h1>
        <p className={styles.description}>Edit your personal info.</p>
      </main>
    </div>
  );
};

export default Account;
