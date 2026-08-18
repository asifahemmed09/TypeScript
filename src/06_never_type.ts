function infiniteLoop(): never {
  while(true){
    console.log(1)
  }
}

function throwError(message: string): never{
  throw new Error(message)
}
