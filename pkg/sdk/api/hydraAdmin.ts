import { AdminApi, Configuration } from '@ory/hydra-client'

const baseOptions: any = {}

if (process.env.MOCK_TLS_TERMINATION) {
  baseOptions.headers = { 'X-Forwarded-Proto': 'https' }
}

export default new AdminApi(
  new Configuration({
    basePath: process.env.ORY_HYDRA_ADMIN_URL,
    baseOptions
  })
)
