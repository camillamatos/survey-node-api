import { adaptMiddleware } from '../adapters/express-middlware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory.ts'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
