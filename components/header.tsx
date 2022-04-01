import Link from 'next/link';
import styles from '../styles/header.module.css';
import Image from 'next/image';
import logo from '../public/images/bld-energy-logo.webp';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Scheduling', id: 2, path: '/scheduling' },
  { uid: 41, name: 'Trading', id: 3, path: '/trading' },
  { uid: 51, name: 'Account', id: 3, path: '/account' },
];

export default function Header() {
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e: any) => {
    setDarkTheme(e.target.checked);
  };

  // useEffect(() => {
  //   if (darkTheme !== undefined) {
  //     if (darkTheme) {
  //       // Set value of  darkmode to dark
  //       document.documentElement.setAttribute('data-theme', 'dark');
  //       window.localStorage.setItem('theme', 'dark');
  //     } else {
  //       // Set value of  darkmode to light
  //       document.documentElement.removeAttribute('data-theme');
  //       window.localStorage.setItem('theme', 'light');
  //     }
  //   }
  // }, [darkTheme]);

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   const initialColorValue: any = root.style.getPropertyValue(
  //     '--initial-color-mode'
  //   );
  //   // Set initial darkmode to light
  //   setDarkTheme(initialColorValue === 'dark');
  // }, []);
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="BLD Energy"
                width={172}
                height={68}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </a>
          </Link>
        </div>

        <div className={styles.links}>
          {path.map((value) => {
            return (
              <div
                key={value.uid}
                className={
                  (router.pathname === value.path
                    ? styles.active
                    : styles.inactive) +
                  ` ` +
                  styles.link
                }>
                <span>
                  <Link href={value.path}>
                    <a>{value.name}</a>
                  </Link>
                </span>
              </div>
            );
          })}
        </div>

        <div>
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </form>
        </div>
      </nav>
    </header>
  );
}
