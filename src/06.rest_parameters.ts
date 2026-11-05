const sum = (...nums: number[]) => {
    return nums.reduce((current,acc) => current + acc, 0)
}

sum(1,2,3)

const logUserAction = (...args: [name: string,age: number,isActive: boolean]) => {
    const [name,age] = args
    console.log(`${name} is ${age} years old`)
}

logUserAction("John Doe",24,false)


