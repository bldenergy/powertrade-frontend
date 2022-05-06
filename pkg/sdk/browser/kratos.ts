import { Configuration, V0alpha2Api, V0alpha2ApiInterface } from '@ory/kratos-client'
import { edgeConfig } from '@ory/integrations/next'

export default new V0alpha2Api(new Configuration(edgeConfig))
