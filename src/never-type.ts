type Role = "admin" | "user"

function redirect(role: Role): void{
  if(role === "admin"){
    console.log("redirecting to admin dashboard")
    return
  }
  if(role === "user"){
    console.log("redirecting to user dashboard")
    return
  }
  role
}
function neverEnd():never{
  while(true){
    
  }
}
