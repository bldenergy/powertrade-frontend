import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const redirectKey = 'login_in_redirect'
export function AuthGuard({ children }: { children: JSX.Element }) {
  let token
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('Xjdfnd') || {}
  }

  const [accesToken, setAccesToken] = useState(token)
  const router = useRouter()

  useEffect(() => {
    console.log(accesToken)
    // If there is no access token then redirect to login page
    if (!accesToken) {
      // remember the page that user tried to access
      //   setRedirect(router.route)
      router.push('/login')
    }
  }, [accesToken, router])

  //if auth initialized with a valid user show protected page
  if (accesToken) {
    return <>{children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}

function setRedirect(redirect: string) {
  window.sessionStorage.setItem(redirectKey, redirect)
}
