import { json, urlencoded } from 'body-parser'
import compression from 'compression'
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import APIRoutes from './routes/api'

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  private middleware() {
    this.app.all('*', function (req: Request, res: Response, next: NextFunction) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
      res.header('Content-Type', 'application/json;charset=utf-8')
      next()
    })
    this.app.use(compression())
    this.app.use(morgan('dev'))
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
  }

  private routes() {
    this.app.use('/api', new APIRoutes().router)
  }
}

export default new Server().app
