import * as express from 'express'
import { Application, Router } from 'express'

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middlewares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middlewares)
        this.routes(appInit.controllers)
    }

    private middlewares(middlewares: Array<any>) {
        for(let middleware of middlewares) {
            this.app.use(middleware)
        }
    }

    private routes(controllers: Array<{path: string, router: Router}>) {
        for(let controller of controllers) {
            this.app.use(`/v1${controller.path}`, controller.router)
        }
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App