type Category = "Chest"| "Back"| "Abs"| "Legs"| "Others"

export type Menu = {
  id: string,
  title: string,
  describe: string,
  url: string,
  image?:string,
  category: Category,
}
