function printID(id: string | number){
  if(typeof id === "string"){
    console.log(id.toUpperCase())
  }else{
    console.log(id.toFixed(2))
  }
}


type Admin = {role: "admin", permissions: string[]}
type Customer = {role: "customer", loyaltyPoints: number}

function describeUser(user: Admin | Customer){
  if(user.role === "admin"){
    console.log(user.permissions)
  }else{
    console.log(user.loyaltyPoints)
  }
}

const arrOfUnions: (string | number)[] = ["a",1,"b",2]

const unionsOfArr: string[] | number[] = Math.random() > 0.1? [1,2]: ['a','b']


