import { apiKeyAuthSchema } from './schemas/'
import { badRequest, unauthoraized, serverError, notFound, forbidden } from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthoraized,
  serverError,
  notFound,
  forbidden
}
