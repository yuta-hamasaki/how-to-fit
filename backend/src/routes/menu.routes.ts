import { Router, Request, Response } from 'express'
import menuController from '../controllers/menu.controller'

const menuRouter = Router()

menuRouter.get('/', menuController.getAllMenus)
menuRouter.get('/:id', menuController.getMenuById)
menuRouter.put('/:id', menuController.updateMenuById)
menuRouter.delete('/:id', menuController.deleteMenuById)
menuRouter.post('/create', menuController.postMenu)

export default menuRouter