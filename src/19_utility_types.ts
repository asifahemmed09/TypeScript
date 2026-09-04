type Address = {
  street: string
  city: string
  country: string
}

type User = {
  id: number
  name: string
  age: number
  email?: string
  address: Address
}

type User1 = Partial<User>

const user: User1 = {
  id: 1
}

type User2 = Omit<User, "address">

const user2 : User2 = {
  id: 1,
  name: "John Doe",
  age: 20
}

type User3 = Required<User>

const user3: User3 ={
  id: 1,
  name: "Smith",
  age: 20,
  email: "smith@gmail.com",
  address:{
    street: "123",
    city: "NY",
    country: "USA"
  }
}

type User4 = Pick<User, "id" | "name">

const user4: User4 = {id:1, name: "Jane Doe"}


function ExtractUserInfo(id: number, isExtraInfo: boolean = false){
  return {
      id: id,
      name: "John",
      log: isExtraInfo ? "details" : "no details"
    }
}


type UserFromReturn =  ReturnType<typeof ExtractUserInfo>
type ParamsType = Parameters<typeof ExtractUserInfo>


const user5: UserFromReturn = {
  id: 1,
  name: "John",
  log: "Details"
}

const params: ParamsType = [1, true]


type Event = "click" | "submit" | "keyup" | "keydown" | "hover"
type Event1 =  Exclude<Event,"hover">


function event(e:Event1){
  console.log(e)
}

event("click")


type Number = number | null | undefined

type ExactNumber = NonNullable<Number>

const number: ExactNumber = 2


