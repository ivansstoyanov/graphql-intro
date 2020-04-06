import express from 'express'
import { createServer, Server } from 'http'
import compression from 'compression' // compresses requests
import bodyParser from 'body-parser'
import lusca from 'lusca'
import cors from 'cors'
import * as dotenv from 'dotenv'

import { registerGQL } from './qgl/gql'
import { registerApiRoutes } from './api/routes/api-router'

export class ApiServer {
    public static readonly PORT: number = 80
    private app: express.Application
    private server: Server
    private port: string

    public constructor () {
        this.createApp()
        this.config()
        this.createServer()
        registerGQL(this.app)
        this.registerRoutes()
        this.listen()
    }

    private createApp (): void {
        this.app = express()
    }

    private config (): void {
        dotenv.config()
        this.port = process.env.PORT

        this.app.use(cors())
        this.app.use(compression())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(lusca.xframe('SAMEORIGIN'))
        this.app.use(lusca.xssProtection(true))
    }

    private createServer (): void {
        this.server = createServer(this.app)
    }

    private registerRoutes (): void {
        registerApiRoutes(this.app)
    }

    private listen (): void {
        this.server.listen(this.port, async () => {
            console.log('  App is running at http://localhost:%d in %s mode', this.port, process.env.NODE_ENV)
            console.log('  Press CTRL-C to stop\n')
        })
    }

    public getApp (): express.Application {
        return this.app
    }
}
