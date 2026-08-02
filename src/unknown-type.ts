let value: any = "John"
value = 43
value = [1,2,3,4,5]

console.log(value.toUpperCase())

let newValue: unknown = "John"
newValue = 45
newValue = [1,2,3,4,5]

if(typeof newValue === "string"){
  console.log(newValue.toUpperCase())
}
