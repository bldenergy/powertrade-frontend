import type { NextPage } from 'next';
import styles from '../styles/shared.module.css';
import HeadComponent from '../components/head';
import { useRouter } from 'next/router';
import en from '../locales/en';
import zh from '../locales/zh';

const Scheduling: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : zh;
  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Scheduling..." />
      <main className={styles.main}>
        <h1 className={styles.title}>{translate.scheduling.title}</h1>
        <p className={styles.description}>{translate.scheduling.subTitle}</p>
      </main>
    </div>
  );
};

export default Scheduling;
