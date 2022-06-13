import logo from '../../public/images/bld-energy-logo.webp'
import styles from './header.module.css'
import { useSession, signOut, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import en from '../../locales/en'
import zh from '../../locales/zh'

const path = [
  { uid: 21, name: 'Power Consumption', id: 2, path: '/power-consumption' },
  { uid: 31, name: 'Scheduling', id: 2, path: '/scheduling' },
  { uid: 41, name: 'Trading', id: 3, path: '/trading' }
]

export default function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  const { locale } = router
  const translate: any = locale === 'en' ? en : zh
  // console.log(translate['home']);

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

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
                }
              >
                <span>
                  <Link href={value.path}>
                    <a>
                      {
                        translate[value.name.toLowerCase().replace(/\s/g, '')]
                          .title
                      }
                    </a>
                  </Link>
                </span>
              </div>
            )
          })}
        </div>

        {/* <div className={styles.formSlider}>
          <form action="#">
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
              />
              <span className={styles.slider}></span>
            </label>
          </form>
        </div> */}

        {/* <div className={styles.selectOption}>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className={styles.selectStyle}
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="zh">
              ZH
            </option>
          </select>
        </div> */}

        {!session && (
          <div className={styles.selectOption}>
            <div>
              <button
                className={styles.authButton}
                type="button"
                data-testid="login"
                data-href="/login"
                title={'Login'}
                onClick={() => signIn('kratos-hydra')}
              >
                Login
              </button>
            </div>
            <div>
              <button
                className={styles.authButton}
                data-testid="sign-up"
                data-href="/registration"
                title={'Sign Up'}
                onClick={() => signIn('kratos-hydra')}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {session && (
          <div className={styles.selectOption}>
            <div>
              <button
                className={styles.authButton}
                data-testid="account"
                disabled={!session}
                onClick={() => {
                  window.location.replace('https://127.0.0.1:4455/')
                }}
              >
                Account
              </button>
            </div>
            <div>
              <button
                className={styles.authButton}
                data-testid="logout"
                disabled={!session}
                title={'Logout'}
                onClick={() => {
                  window.location.replace(
                    'https://127.0.0.1:4455/logout?redirect_url=https://127.0.0.1:4456/'
                  )
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
