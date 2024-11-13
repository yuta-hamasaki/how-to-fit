// menuRouter.get('/:id', menuController.getMenuById)
// menuRouter.put('/:id', menuController.updateMenuById)
// menuRouter.delete('/:id', menuController.deleteMenuById)
// menuRouter.post('/create', menuController.createMenu)

import { Request, Response } from 'express'
import menuModel from '../model/menu.model'
import { Menu } from '../types/menu'

const getAllMenus = (req: Request, res: Response) => {
  const menus = menuModel.findAll()
  res.json(menus)
}


const getMenuById = (req: Request<{ id: string }>, res: Response)=>{
  const {id} = req.params
  const menu = menuModel.findById(id)
  if(!menu) {
    res.status(404).send('Menu not found')
    return
  }
  res.json(menu)
}

const postMenu = (req: Request<{}, {}, Menu>, res: Response)=>{
  const {
    title,
    describe,
    url,
    image,
    category
  } = req.body

  const menu = menuModel.createMenu({
    title,
    describe,
    url,
    image,
    category
  })

  res.status(201).json(menu)
}

const updateMenuById = (req: Request<{ id: string }, {}, Menu>, res: Response) => {
  const { id } = req.params
  const {
    title,
    describe,
    url,
    category
  } = req.body
  const menu = menuModel.editMenu(
    id,
    {
    title,
    describe,
    url,
    category
  })

  if (!menu) {
    res.status(404).json({ message: "User not found" })
    return
  }
  res.status(200).json(menu)
}

// Delete user by id
const deleteMenuById = (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  const isDeleted = menuModel.deleteMenu(id)
  if (!isDeleted) {
    res.status(404).send('User not found')
    return
  }
  res.status(200).send('User deleted!')
}


export default{
  getAllMenus,
  getMenuById,
  postMenu,
  updateMenuById,
  deleteMenuById,
}
