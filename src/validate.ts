import express from 'express'
import { validationResult } from 'express-validator'

export const validate = (req: express.Request) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new Error(errors.array()[0].msg)
  }
}