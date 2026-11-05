const concatName = (firstName: string, lastName?: string) => {
    if (!lastName){
        return firstName
    }
    return firstName + " " + lastName
}


concatName("John")
