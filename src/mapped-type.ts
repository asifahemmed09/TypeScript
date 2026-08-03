type User = {
  name: string
  age: number
}

type NewUser <T> = {
  [k in keyof T]?: T[k]
}

const user: NewUser<User> = {
  name: "John",
}
