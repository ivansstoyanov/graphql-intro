import * as express from 'express'

import { statusRoutes } from './status-routes'
import { valuesRoutes } from './values-routes'

export const registerApiRoutes = (app: any) => {
    app.use('/api/status', statusRoutes(express))
    app.use('/api/values', valuesRoutes(express))
}
