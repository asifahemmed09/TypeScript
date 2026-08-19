type Data = {
  id: string | number
  name: string
}

function getData(data: Data):void{
  if(typeof data.id === "string"){
    console.log(data.id.toUpperCase())
  }else{
    console.log(data.id.toFixed(2))
  }
}
