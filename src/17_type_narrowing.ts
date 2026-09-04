function describe(x: unknown){
  if(typeof x === "string"){
    console.log(x.toUpperCase())
  }
  if(typeof x === "number"){
    console.log(x.toFixed(2))
  }
}


describe(20.555)
describe("John Doe")

function info(x: unknown){
  if(Array.isArray(x)){
    x.pop()
  }
  if(x instanceof Date){
    console.log(new Date())
  }
  if(x instanceof Error){
    throw new Error("An error occurred");
    
  }
}
