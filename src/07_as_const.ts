const roles = ["admin", "user", "operator"] as const

type Role = (typeof roles)[number]


function setRole(role: Role){
  console.log(role)
}

setRole("user")
