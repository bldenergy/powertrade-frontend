import type { NextPage } from 'next';
import styles from '../styles/shared.module.css';
import HeadComponent from '../components/head';
import { useRouter } from 'next/router';
import en from '../locales/en';
import zh from '../locales/zh';

const Account: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : zh;
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Account" />
      <main className={styles.main}>
        <h1 className={styles.title}>{translate.account.title}</h1>
        <p className={styles.description}>{translate.account.subTitle}</p>
      </main>
    </div>
  );
};

export default Account;
