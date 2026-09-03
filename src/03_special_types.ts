// Union Type

let intro: string | undefined
intro = "Hello"
intro = undefined


// Void Type

function logMessage(message: string): void{
  console.log(message)
}


// Never Type

function throwError(message: string): never{
  throw new Error(message)
}


// Any Type
let response: any
response = "Data"
response = 22
