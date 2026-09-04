function calculateSum(a: number, b: number): number{
  return a + b
}

const square = (n: number): number => n * n

function greet(name?: string): void{
  if(name){
    console.log(`Hello ${name}`)
  }else{
    console.log("Hello")
  }
}

function greetPerson(name: string = "Guest"):void{
  console.log(`Hello ${name}`)
}

function sumAll(...nums: number[]): number{
  return nums.reduce((x,y)=> x + y)
}


function makeRange(...args: [start: number, end: number, step?: number]){
  const[start, end, step] = args
  const output: number[] = []
  for (let index = start; index < end; index++) {
    output.push(index)
  }
  return output
}

function draw(x: number, y: number){
  console.log(x,y)
}

const points = [10,20] as const

draw(...points)
