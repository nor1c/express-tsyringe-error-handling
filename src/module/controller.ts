import express from 'express'
import { injectable } from 'tsyringe'

import ModuleValidator from './validator'

@injectable()
export default class ModuleController {
  constructor(
    private validator: ModuleValidator
  ) {}

  canCatch() {
    return async (req: express.Request, res: express.Response) => {
      await this.validator.validateIt(req)
      res.send('canCatch()')
    }
  }
}