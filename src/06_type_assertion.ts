
const rawData = "{'id': 1, 'name': 'John Doe'}"

type User2 = {
  id: number
  name: string
}

function isUser(u: unknown): u is User2{
  return (
    typeof u === "object" && u !== null  && "id" in u &&
    typeof (u as any).id === "number" && "name" in u &&
    typeof (u as any).name === "string"
  )
}

const data = JSON.parse(rawData) as unknown

if(isUser(data)){
  console.log(data.name)
}
