import { inject, injectable, registry } from 'tsyringe'

import ModuleController from './controller'
import ModuleRouter from './routes'
import ModuleValidator from './validator'

@registry([
  { token: 'ModuleRoute', useClass: ModuleRouter },
  { token: 'ModuleController', useClass: ModuleController },
  { token: 'ModuleValidator', useClass: ModuleValidator }
])
@injectable()
export default class Module {
  constructor(
    @inject('ModuleRoute') public route: ModuleRouter
  ) {
    console.log('module fired');
  }
}