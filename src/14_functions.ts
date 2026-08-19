function add(a: number, b:number):number{
  return a + b
}

const subtract = function(a: number, b: number): number{
  return a - b
}

const multiply = (a: number, b: number): number => a * b

function greet(name?: string, message: string = "Hello"){
  if(name){
    console.log(`${message} ${name}`)
  }else{
    console.log(`${message}`)
  }
}

//* Function Overloading
function getLength(data: string): number
function getLength(data: number[]): number
function getLength(data: any): number{
  return data.length
}

console.log(getLength([1,2,3,4]))

function sum(...numbers: number[]): number{
  return numbers.reduce((prev,curr) => prev + curr,0)
}
