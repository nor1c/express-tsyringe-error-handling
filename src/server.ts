import 'reflect-metadata'
import 'express-async-errors'

import express, { Express } from 'express'
import ModuleRouter from 'module/routes'
import { container, injectable } from 'tsyringe'

@injectable()
class App {
  private _app: Express

  constructor() {
    this._app = express()
  }

  async bootstrap() {
    // module router
    this._app.use('/module', container.resolve<ModuleRouter>(ModuleRouter).routes())

    // error handler
    this._app.use(
      (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send('Something went wrong')
      }
    )

    this._app.listen(2000, () => console.log('app running'))
  }
}

(async function() {
  await container.resolve<App>(App).bootstrap()
})()