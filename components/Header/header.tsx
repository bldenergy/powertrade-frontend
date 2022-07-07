import en from '../../locales/en';
import zh from '../../locales/zh';
import logo from '../../public/images/logo/bld-energy-logo.webp';
import logoWhite from '../../public/images/logo/bld_logo.png';
import styles from './header.module.css';
import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  useColorMode,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data: session }: any = useSession();
  const router = useRouter();

  const { locale } = router;
  // const translate: any = locale === 'en' ? en : zh;
  const translate: any = zh;
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div>
          {
            translate[
              router.pathname === '/'
                ? 'home'
                : router.pathname.toLowerCase().replace(/[^\w\s]/gi, '')
            ].title
          }
        </div>

        {/* <div>
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
        </div> */}
        {/* <div style={{ display: 'flex', gap: '0.75rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Select
              className={styles.optionColor}
              onChange={changeLanguage}
              defaultValue={locale}
              variant="unstyled">
              <option value="en">EN</option>
              <option value="zh">ZH</option>
            </Select>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
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
                    window.location.replace('https://127.0.0.1:4455/');
                  }}>
                  {translate.account.title}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.replace(
                      'https://127.0.0.1:4455/logout?redirect_url=https://127.0.0.1:4456/'
                    );
                  }}>
                  {translate.account.logout}
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
