import logo from '../../public/images/bld-energy-logo.webp'
import styles from './header.module.css'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
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
  const { data: session }: any = useSession()
  const router = useRouter()

  const { locale } = router
  const translate: any = locale === 'en' ? en : zh

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div>
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
        <div>
          <Menu>
            <MenuButton>
              <Avatar
                size="md"
                bg="gray"
                name={session?.user.email}
                src={session?.profile?.picture}
              />
            </MenuButton>

            <MenuList color={'black'}>
              <MenuItem
                onClick={() => {
                  window.location.replace('https://127.0.0.1:4455/')
                }}
              >
                Account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.location.replace(
                    'https://127.0.0.1:4455/logout?redirect_url=https://127.0.0.1:4456/'
                  )
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  )
}
