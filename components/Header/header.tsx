import logo from '../../public/images/bld-energy-logo.webp'
import styles from './header.module.css'
import { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import en from '../../locales/en'
import zh from '../../locales/zh'
import { createLogoutHandler } from '../../pkg'
import kratosBrowser from '../../pkg/sdk/browser/kratos'

const path = [
  { uid: 21, name: 'Power Consumption', id: 2, path: '/power-consumption' },
  { uid: 31, name: 'Scheduling', id: 2, path: '/scheduling' },
  { uid: 41, name: 'Trading', id: 3, path: '/trading' }
]

export default function Header() {
  const router = useRouter()
  const [darkTheme, setDarkTheme] = useState(false)
  const [hasSession, setHasSession] = useState<boolean>(false)
  const onLogout = createLogoutHandler()
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )

  const handleToggle = (e: any) => {
    setDarkTheme(e.target.checked)
  }
  const { locale } = router
  const translate: any = locale === 'en' ? en : zh
  // console.log(translate['home']);

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  useEffect(() => {
    kratosBrowser
      .toSession()
      .then(({ data }) => {
        setSession(JSON.stringify(data, null, 2))
        setHasSession(true)
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 403:
          // This is a legacy error code thrown. See code 422 for
          // more details.
          case 422:
            // This status code is returned when we are trying to
            // validate a session which has not yet completed
            // it's second factor
            return router.push('/login?aal=aal2')
          case 401:
            // do nothing, the user is not logged in
            return
        }

        // Something else happened!
        return Promise.reject(err)
      })
  })

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme')
        window.localStorage.setItem('theme', 'light')
      }
    }
  }, [darkTheme])

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue: any = root.style.getPropertyValue(
      '--initial-color-mode'
    )
    // Set initial darkmode to light
    const verifyDark: any = initialColorValue === 'dark'
    setDarkTheme(verifyDark)
  }, [])
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

        {!hasSession && (
          <div className={styles.selectOption}>
            <div>
              <button
                className={styles.authButton}
                type="button"
                data-testid="login"
                data-href="/login"
                disabled={hasSession}
                title={'Login'}
                onClick={(event) => (window.location.href = '/login')}
              >
                Login
              </button>
            </div>
            <div>
              <button
                className={styles.authButton}
                data-testid="sign-up"
                data-href="/registration"
                disabled={hasSession}
                title={'Sign Up'}
                onClick={(event) => (window.location.href = '/registration')}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {hasSession && (
          <div className={styles.selectOption}>
            <div>
              <button
                className={styles.authButton}
                data-testid="logout"
                onClick={(event) => (window.location.href = '/account')}
                disabled={!hasSession}
                title={'Account'}
              >
                Account
              </button>
            </div>
            <div>
              <button
                className={styles.authButton}
                data-testid="logout"
                onClick={onLogout}
                disabled={!hasSession}
                title={'Logout'}
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
