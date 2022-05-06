import { Issuer, IssuerMetadata } from 'openid-client';

export const RandomState = () => {
  return Math.random().toString(36).substring(1, 15) + Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(3, 17)
}

export const BLDScope = 'openid offline';

export const BLDMetadata: IssuerMetadata = {
  issuer: 'https://bld.energy/',
  authorization_endpoint: `${process.env.ORY_HYDRA_PUBLIC_URL}/oauth2/auth`,
  token_endpoint: `${process.env.ORY_HYDRA_PUBLIC_URL}/oauth2/token`,
  jwks_uri: `${process.env.ORY_HYDRA_PUBLIC_URL}/.well-known/jwks.json`,
  end_session_endpoint: `${process.env.ORY_HYDRA_PUBLIC_URL}/oauth2/sessions/logout`,
}

export const BLDIssuer = new Issuer(BLDMetadata);

export default new BLDIssuer.Client({
  client_id: process.env.ORY_HYDRA_CLIENT_ID || "",
  client_secret: process.env.ORY_HYDRA_CLIENT_SECRET,
  redirect_uris: [`${process.env.BLD_POWERTRADE_URL}/callback`],
  response_types: ['code'],
  // id_token_signed_response_alg (default "RS256")
  // token_endpoint_auth_method (default "client_secret_basic")
})
