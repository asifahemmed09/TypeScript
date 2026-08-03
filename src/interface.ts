interface CupSize {
  size :  "small" | "large"
}

class Cup implements CupSize{
   size: "small" | "large" = "large"
}

interface User {
  name: string
  age: number
  role: "admin" | "user"
}

const user: User = {
  name: "John",
  age: 24,
  role: "admin"
}

interface CalculateDiscount {
  (price: number): number
}

const calculateDiscount: CalculateDiscount = (price: number) => price * 0.5

interface TeaMachine {
  start(): void
  stop(): void
}

const teaMachine: TeaMachine = {
  start() {
    console.log("Starting")
  },
  stop() {
    console.log("Stopped")
  }
}

// merging interface
interface Item {
  readonly id: string
}
interface Item {
  name: string
}

const item: Item = {
  id: "1",
  name: "T-Shirt"
}


// extending interface
interface Longitude {
  lon: [number, number]
}

interface Latitude {
  lat: [number, number]
}

interface Location extends Longitude, Latitude{
  name:  string
}

const currentLocation: Location = {
  name: "New York",
  lon: [22.4, 55.6],
  lat: [44.6, 44.2]
}

// indexing interface
interface Tea {
  [type: string]: number
}

function getTea(tea: Tea){
  console.log(tea)
}

getTea({ginger: 2})



