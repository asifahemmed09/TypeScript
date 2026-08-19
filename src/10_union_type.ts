let id: string | number;
id = 1
id = "1"

function logID(id: string | number): void{
  console.log(id)
}

logID(1)
logID("1")
