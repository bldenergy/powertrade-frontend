import en from '../../locales/en';
import zh from '../../locales/zh';
import homeActive from '../../public/images/navigation-icon/active/home.svg';
import tradingPlanActive from '../../public/images/navigation-icon/active/my_plan.svg';
import rewardActive from '../../public/images/navigation-icon/active/rewards.svg';
import settingsActive from '../../public/images/navigation-icon/active/settings.svg';
import powerUsageActive from '../../public/images/navigation-icon/active/usage.svg';
import homeInactive from '../../public/images/navigation-icon/inactive/home.svg';
import tradinPlanInactive from '../../public/images/navigation-icon/inactive/my_plan.svg';
import rewardInactive from '../../public/images/navigation-icon/inactive/rewards.svg';
import settingsInactive from '../../public/images/navigation-icon/inactive/settings.svg';
import powerUsageInactive from '../../public/images/navigation-icon/inactive/usage.svg';
import styles from './navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const path = [
  {
    uid: 11,
    name: 'Home',
    id: 1,
    path: '/',
    inactive: homeInactive,
    active: homeActive,
  },
  {
    uid: 21,
    name: 'Power Usage',
    id: 2,
    path: '/power-usage',
    inactive: powerUsageInactive,
    active: powerUsageActive,
  },
  {
    uid: 31,
    name: 'Trading Plan',
    id: 3,
    path: '/trading-plan',
    inactive: tradinPlanInactive,
    active: tradingPlanActive,
  },
  {
    uid: 41,
    name: 'Rewards',
    id: 4,
    path: '/rewards',
    inactive: rewardInactive,
    active: rewardActive,
  },
  {
    uid: 51,
    name: 'Settings',
    id: 5,
    path: '/settings',
    inactive: settingsInactive,
    active: settingsActive,
  },
];

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  // const translate: any = locale === 'en' ? en : zh;
  const translate: any = zh;

  return (
    <nav className={styles.container}>
      <div className={styles.links}>
        {path.map((page) => {
          return (
            <Link href={page.path} key={page.uid} passHref>
              <div
                className={
                  page.uid === 31
                    ? styles.navigationIconMiddle
                    : styles.navigationIcon
                }>
                <div className={styles.navigationIconStyle}>
                  <Image
                    src={
                      router.pathname === page.path
                        ? page.active
                        : page.inactive
                    }
                    alt={
                      translate[page.name.toLowerCase().replace(/\s/g, '')]
                        .title
                    }
                  />
                </div>
                <div>
                  <span className={styles.linkText}>
                    {
                      translate[page.name.toLowerCase().replace(/\s/g, '')]
                        .title
                    }
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
