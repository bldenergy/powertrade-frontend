import styles from '../styles/shared.module.css';
import { Spinner } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';

type AuthProps = {
  children: ReactNode;
};
export default function Auth({ children }: AuthProps) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!isUser) signIn('bldenergy-myaccount'); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#088be0"
          size="xl"
        />
      </main>
    </div>
  );
}
