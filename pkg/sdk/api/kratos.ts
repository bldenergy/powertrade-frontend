import { Configuration, V0alpha2Api } from '@ory/kratos-client'

export const apiBaseUrl = process.env.ORY_KRATOS_URL

export default new V0alpha2Api(
  new Configuration({
    basePath: `${apiBaseUrl}`
  })
)
