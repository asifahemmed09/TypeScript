type Order = {
  type: string;
  sugar: number;
  strong: boolean;
};
function makeTea(order: Order) {
  console.log(order);
}
function serveTea(order: Order) {
  console.log(order);
}

type TeaOrder = {
  type: string
  sugar: number
}

class Tea implements TeaOrder{
  type = "Masala"
  sugar = 2
}

// interface
interface CupSize {
  size :  "small" | "large"
}
class Cup implements CupSize{
   size: "small" | "large" = "large"
}

// union type
type role = "admin" | "user"

const user: role = "admin"

// intersection type
type BaseIngredients = {teaLeaves: number}
type Extra = {ingredients: string}
type MasalaTea = BaseIngredients & Extra

const myTea: MasalaTea = {
  teaLeaves: 2,
  ingredients: "masala"
}


// optional type

type User = {
  name: string
  bio?: string
}

const user1: User = {name:"John"}
const user2: User = {name:"Jane",bio: "student"}

//  readonly type
type Config = {
  readonly appName: string
  version: number
}

const configuration: Config = {
  appName: "My App",
  version: 1
}

// configuration.appName = "My App 2"  // cannot assign a new value to readonly properties
configuration.version = 2
