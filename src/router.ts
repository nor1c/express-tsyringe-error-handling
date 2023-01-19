import { Router } from 'express'
import ModuleRouter from 'module/routes'
import { container, injectable } from 'tsyringe'

@injectable()
export default class AppRouter {
  private _router: Router

  constructor() {
    this._router = Router()

    this.router()
  }

  router() {
    this._router.get('/test', () => {
      throw new Error('router error')
    })
    this._router.use('/module', container.resolve<ModuleRouter>(ModuleRouter).routes())

    return this._router
  }
}