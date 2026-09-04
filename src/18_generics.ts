function logID<T>(id: T): T{
  return id
}

logID("001")
logID(1)


function lastElement<T>(arr: T[]): T | undefined{
  return arr[arr.length - 1]
}

function wrap<T>(value: T): {value: T}{
  return {value: value}
}


function getLength<T extends {length: number}>(value: T): number{
  return value.length
}


type User = {id: number, name: string, age: number}

function getUserDetails<T,U extends keyof T>(arr: T[],key: U): Array<T[U]>{
  return arr.map(item => item[key])
}


const users: User[] = [
  {id:1,name:"X",age:20},
  {id:2,name:"Y",age:30}
]

getUserDetails(users, "age")
