import logo from '../../public/images/bld-energy-logo.webp'
import logoWhite from '../../public/images/bld_logo.png'
import styles from './header.module.css'
import { IconButton } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  useColorMode
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
  const { colorMode, toggleColorMode } = useColorMode()
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
                src={colorMode === 'light' ? logo : logoWhite}
                alt="BLD Energy"
                width={colorMode === 'light' ? 172 : 150}
                height={colorMode === 'light' ? 68 : 45}
              />
            </a>
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Select
              className={styles.optionColor}
              onChange={changeLanguage}
              defaultValue={locale}
              variant="unstyled"
            >
              <option value="en">EN</option>
              <option value="zh">ZH</option>
            </Select>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
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

              <MenuList className={styles.optionColor}>
                <MenuItem
                  onClick={() => {
                    window.location.replace('https://127.0.0.1:4455/')
                  }}
                >
                  {translate.account.title}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.replace(
                      'https://127.0.0.1:4455/logout?redirect_url=https://127.0.0.1:4456/'
                    )
                  }}
                >
                  {translate.account.logout}
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}
