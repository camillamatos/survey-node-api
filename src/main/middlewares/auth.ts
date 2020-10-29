import { adaptMiddleware } from '../adapters/express-middlware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory.ts'

export const auth = adaptMiddleware(makeAuthMiddleware())
