function wrapInArray<T>(value: T): T[]{
  return [value]
}

wrapInArray(22)
wrapInArray("John")

function getNameAndMark<A,B>(name: A, mark: B): void{
    console.log(`${name} gets ${mark}`)
}


getNameAndMark("John", 20)

interface Order<T>{
  name: T
}

const order: Order<string> = {
  name: "T-Shirt"
}
const order2: Order<string[]> = {
  name: ["bag","pencil","eraser"]
}

interface Response<T> {
  status: number
  data: T
}

const apiResponse: Response<{flavour: string}> = {
  status: 200,
  data: {flavour: "ginger"}
}
