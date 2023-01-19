import { Router } from 'express'
import Module from 'module/module'
import { container, registry } from 'tsyringe'

@registry([
  {
    token: 'Module',
    useFactory: (): Router => {
      return container.resolve(Module).route.routes()
    }
  }
])
export default class AppModule {}