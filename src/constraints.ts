interface HasLength {
  length: number
}

function printLength <T extends HasLength> (value: T){
  console.log(value.length)
}


function merge <T extends object, U extends object>(obj1: T, obj2: U){
  return {
    ...obj1,
    ...obj2
  }
}

merge({name: "Asif"},{age: 24})


function getValue<T, K extends keyof T>(obj:T, key:K){
  return obj[key]
}


