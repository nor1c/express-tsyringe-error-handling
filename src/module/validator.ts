import 'express-async-errors'

import express from 'express'
import { check } from 'express-validator'
import { injectable } from 'tsyringe'
import { validate } from 'validate'

@injectable()
export default class ModuleValidator {
  async validateIt(req: express.Request) {
    await check('a', 'A required').notEmpty().run(req)

    await validate(req)
  }
}