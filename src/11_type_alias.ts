type ID = string | number
let id: ID = "1"
id = 1

type User = {
  name: string
  age: number
}

const user: User = {
  name: "John Doe",
  age: 24
}

type Customer = User & {
  address: string
}

const customer: Customer = {
  address: "New York",
  name: "John Doe",
  age: 24
}

type MathOperation = {
  mathOperation: (a:number, b:number) => void
}


const operations:  MathOperation = {
  mathOperation(a,b){
    console.log(a + b)
  }
}

type Status = "Pending" | "Fulfilled" | "Failed"

const response: Status = "Fulfilled"
