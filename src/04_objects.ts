type User = {
  id: number
  name: string
  email?: string
  readonly createdAt: Date
}

const user1: User = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  createdAt: new Date()
}

type Count = {[key: string]: number}
type Counts = Record<"likes" | "comments" | "shares", number>

const total: Count = {earnings: 2000}

const socialHandle: Counts = {
  likes: 20,
  comments: 33,
  shares: 5
}


