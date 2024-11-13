export type User = {
  id: string,
  username: string,
  email: string,
  password: string
  role: "trainer" | "user"
}