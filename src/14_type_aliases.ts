type Person = {
  id: number
  name: string
  email?: string
}

const person: Person = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
}


type Status = "completed" | "pending" | "failed"

function getStatus(status: Status): Status{
  return status
}

type Merge1 = "user"
type Merge2 = "admin"

type Merge =  Merge1 & Merge2
