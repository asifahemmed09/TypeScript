interface IUser {
    name: string
    email: string
    password: string
    id: number
}

function updateUser(id: number, data: Partial<IUser>){
    return {id,...data}
}


interface IConfig{
    APIkey?: string
    timeout?: number
}


const config: Required<IConfig> = {
    APIkey: "asx",
    timeout: 10
}


interface IProduct {
    id: string
    name: string
    description: string
    price: number
    inStock: boolean
}

const previewProduct: Pick<IProduct, "name" | "price"> = {
    name: "IPhone",
    price: 150000
}


const stockPreview: Omit<IProduct, "name"| "description"|"price"> = {
    id: "2",
    inStock: true
}


type Status = "ok" | "created" | "not found"


const statusCode: Record<Status, number> = {
    ok: 200,
    created: 201,
    "not found": 404
}

