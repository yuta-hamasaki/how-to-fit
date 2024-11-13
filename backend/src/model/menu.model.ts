import { v4 as uuidv4 } from 'uuid'
import { Menu } from "../types/menu"

class MenuModel {
  private menus:Menu[] = []

  // Get all users
  findAll(): Menu[] {
    return this.menus
  }

  // Get user by id
  findById(id: string): Menu | undefined {
    const menu = this.menus.find(menu => menu.id === id)
    if (!menu) return undefined
    return menu
  }

  // Create user
  createMenu(newMenu: Omit<Menu, 'id'>): Menu {
    const menu = {
      id: uuidv4(),
      ...newMenu
    }
    this.menus.push(menu)
    return menu
  }

  // Edit user
  editMenu(id: string, newData: Partial<Menu>): Menu | undefined {
    const index = this.menus.findIndex(menu => menu.id === id)
    if (index === -1) return undefined
    const updatedMenu = {
      ...this.menus[index],
      ...newData
    }
    this.menus[index] = updatedMenu
    return updatedMenu
  }

  // Delete user
  deleteMenu(id: string): boolean {
    const index = this.menus.findIndex(menu=> menu.id === id)
    if (index === -1) return false
    this.menus.splice(index, 1)
    return true
  }
}

export default new MenuModel