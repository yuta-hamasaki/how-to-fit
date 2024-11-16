import { v4 as uuidv4 } from 'uuid'
import { Menu } from "../types/menu"

class MenuModel {
  private menus:Menu[] = [
    {
      id: "foasjf",
      title:"Chest workout",
      describe:"Effective wayt to train your chest",
      image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "BTxPU2AhHfU?si=mAWUSqZLYjQouHYx",
      category:"Chest"
    },
    {
      id: "kjsnsknfsknfk",
      title:"Chest workout",
      describe:"Effective wayt to train your chest",
      image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "BTxPU2AhHfU?si=mAWUSqZLYjQouHYx",
      category:"Chest"
    }
  ]

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