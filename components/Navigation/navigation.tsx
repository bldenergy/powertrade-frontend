import logo from '../../public/images/bld-energy-logo.webp'
import styles from './navigation.module.css'
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

  return (
    <nav className={styles.container}>
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
    </nav>
  )
}