import { Router } from 'express'
import { injectable } from 'tsyringe'

import ModuleController from './controller'

@injectable()
export default class ModuleRouter {
  private _router: Router

  constructor(
    private controller: ModuleController
  ) {
    this._router = Router()
    this.routes()
  }

  routes() {
    this._router.get('/catch', this.controller.canCatch())

    return this._router
  }
}