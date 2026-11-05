type User = {
    name: string,
    age: number,
    isMarried: boolean,
    action: () => void
}

const user1: User = {
    name: "John Doe",
    age: 24,
    isMarried: false,
    action: () => {
        console.log("Hello")
    }
}

const user2: User = {
    name: "Jane Doe",
    age: 34,
    isMarried: true,
    action: () => {
        console.log("Hello")
    }
}
