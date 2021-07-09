import express from 'express'
import routes from './routes'
import path from 'path'

import './database'

class App {
  constructor () {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes () {
    this.app.use(routes)
  }
}

export default new App().app
