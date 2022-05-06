import type { NextPage, GetServerSideProps } from 'next'
import bldclient from '../pkg/sdk/oauth2Client'

const Callback: NextPage = (serverProps) => {
  return (
    <></>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Parses the URL query
  const { code, scope, state } = context.query;

  try {
    const params = bldclient.callbackParams(context.req);
    const tokenSet = await bldclient.callback(`${process.env.BLD_POWERTRADE_URL}/callback`, params, { response_type: 'code', state, scope });
    console.log('received and validated tokens %j', tokenSet);
    console.log('validated ID Token claims %j', tokenSet.claims());
  } catch (err) {
    console.log(err);
  }
  return { props: {} }
}

export default Callback
