import ValuesController from '../controllers/values-controller'

export const valuesRoutes = (expressApp: any) => {
    const router = expressApp.Router()

    router.get('/', ValuesController.getValue)
    router.get('/:value', ValuesController.getOneValue)

    return router
}
