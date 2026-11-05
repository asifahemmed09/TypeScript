interface IUser {
    name: string
    age: number
    isMarried: boolean
    action: () => void
}


const user: IUser = {
    name: "John Doe",
    age: 23,
    isMarried: false,
    action: () => {
        console.log("Hello")
    }
}

interface Animal {
    species: string
}

interface Cat extends Animal{
    breed: string
}


const myCat: Cat = {
    species: "Felix Cato",
    breed: "Persian"
}


interface Employee{
    name: string
}

interface Employee{
    designation: string
}


const employee: Employee = {
    name: "John Doe",
    designation: "Software Engineer"
}
