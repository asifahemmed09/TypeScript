let response: any = "42"
let lengthCount = (response as string).length

type Book =  {
  name: string
}

let book = '{name: "The Miracle Morning"}'
let bookObj = JSON.parse(book) as Book
console.log(bookObj.name)

let inputElement = document.getElementById("name") as HTMLInputElement
console.log(inputElement.value)


