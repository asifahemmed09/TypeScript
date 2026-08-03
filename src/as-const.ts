const role = {
  ADMIN: "Admin",
  USER: "User",
  GUEST: "Guest"
} as const

const myRole = role.ADMIN

type Role = typeof role[keyof typeof role]

const userRole: Role = "Guest"


const status = {
  Pending: "Pending",
  Success: "Success",
  Failed: "Failed"
} as const

type Status = typeof status[keyof typeof status]

const apiResponseStatus: Status = "Success"
