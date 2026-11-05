// Any Type
let anything: any  = "John"
anything = 123
anything = true


// Unknown Type
let response: unknown = "Data"
response = 22

// Void Type
const logName = (name: string): void => {
    console.log(name)
}

// Null Type
type APIResponse = "Data" | null

const APIResponse: APIResponse = null

// Undefined Type

function getResponse(data: string): string | undefined{
    if(data){
        return data
    }
}


// Never Type
const throwError = (message: string): never => {
    throw new Error(message)
}
