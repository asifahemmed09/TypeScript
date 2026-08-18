const data: unknown = "Hello"



function getData(data: unknown){
  if(typeof data === "number"){
    console.log(data.toFixed(2))
  }
  if(typeof data === "string"){
    console.log(data.toUpperCase())
  }
}
