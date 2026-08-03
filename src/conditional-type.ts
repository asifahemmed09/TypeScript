interface User{
  name: string
}

interface Product{
  price: number
}

type APIResponse<T> =  T extends User ? {user: T} : {data: T}

type A = APIResponse<User>

const data: A = {
  user: {
    name: "John"
  }
}

