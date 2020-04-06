import { ApiServer } from './app'

const server = new ApiServer()
const app = server.getApp()

export { app }
