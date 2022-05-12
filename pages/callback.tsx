import type { NextPage, GetServerSideProps } from 'next'
import router from 'next/router'
import { useEffect } from 'react'

import bldclient from '../pkg/sdk/oauth2Client'

const Callback: NextPage = (serverProps: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'Xjdfnd',
        JSON.stringify(JSON.parse(serverProps.tokenSet).access_token)
      )
      localStorage.setItem(
        'Lbcdjb',
        JSON.stringify(JSON.parse(serverProps.tokenSet).refresh_token)
      )
      localStorage.setItem(
        'Mchvdh',
        JSON.stringify(JSON.parse(serverProps.tokenSet).id_token)
      )
    }
    router.push('/')
  })
  return <></>
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  let tokenSet
  // Parses the URL query
  const { code, scope, state }: any = context.query

  try {
    const params = bldclient.callbackParams(context.req)
    tokenSet = await bldclient.callback(
      `${process.env.BLD_POWERTRADE_URL}/callback`,
      params,
      { response_type: 'code', state, scope }
    )
    console.log('received and validated tokens %j', tokenSet)
    console.log('validated ID Token claims %j', tokenSet.claims())
    // localStorage.setItem('access_token', JSON.stringify(tokenSet))
    // return {
    //   redirect: {
    //     permanent: false,
    //     destination: '/'
    //   },
    //   props: { id_token: JSON.stringify(tokenSet) }
    // }
  } catch (err) {
    console.log(err)
  }
  return { props: { tokenSet: JSON.stringify(tokenSet) } }
}

export default Callback
