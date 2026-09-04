interface User{
  id: string
  name: string
  email?: string
  readonly createdAt: Date
}

const user: User = {
  id: "001",
  name: "John Doe",
  email: "john@gmail.com",
  createdAt: new Date()
}

interface Admin extends User{
  role: "admin"
}


const admin: Admin ={
  id: "001",
  name: "John Doe",
  email: "john@gmail.com",
  createdAt: new Date(),
  role: "admin"
}
