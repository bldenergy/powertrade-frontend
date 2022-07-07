import HeadComponent from '../components/head';
import en from '../locales/en';
import zh from '../locales/zh';
import styles from '../styles/shared.module.css';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Reward: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : zh;
  return (
    <div className={styles.container}>
      <HeadComponent title={'BLD PowerTrade - ' + translate.rewards.title} />
      <main className={styles.main}>
        <>
          <h1 className={styles.title}>{translate.rewards.title}</h1>
          <p className={styles.description}>{translate.rewards.subTitle}</p>
        </>
      </main>
    </div>
  );
};

export default Reward;
