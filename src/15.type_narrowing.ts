type ID =  string | number

function logID(id: ID){
    if(typeof id == "string"){
        console.log(id.toUpperCase)
    }
    else{
        console.log(id.toFixed(2))
    }
}

type User = {
    name: string
    address?: {
        street: string
    }
} | null

function loggedUser(user: User){
    if(user && user.address){
        return "User is logged in"
    }
    throw new Error("User not found")
}

const printAll = (x: string | string[] | null) => {
    if(typeof x == "object" && x){
        for (let str of x){
            console.log(str)
        }
    }else if (typeof x == "string"){
        console.log(x.toUpperCase())
    }else{
        console.log("Nothing to show")
    }
}


