interface User{
  name: string
  age: number
}
const user: User ={
  name: "John Doe",
  age: 24
}

interface Vehicle{
  name: string;
  model: string;
  year: number;
  color: string;
  start: () => void;
  stop: () => void
}

interface Car extends Vehicle{
  engine: string
}

const car: Car = {
  name: "BMW",
  color: "Blue",
  year: 2022,
  model: "SUV",
  engine: "oil",
  start() {
    console.log("Start")
  },
  stop() {
    console.log("Stop")
  },
}

interface Customer{
  name: string
  age: number
}

interface Customer{
  address: string
}

const customer: Customer = {
  name: "John Doe",
  age: 24,
  address: "New York"
}
