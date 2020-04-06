import * as StatusController from '../controllers/status-controller'

export const statusRoutes = (expressApp: any) => {
    const router = expressApp.Router()

    router.get('/', StatusController.ping)

    return router
}
