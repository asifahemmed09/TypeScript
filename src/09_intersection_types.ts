type Entity1 = {id: number}
type Entity2 = {createdAt: Date}

type Entities =  Entity1 & Entity2

const entities: Entities = {id: 1, createdAt: new Date()}

type Product = {
  id: string
  name: string
  price: number
}

type Stock = {inStock: boolean}

type Products = Product & Stock
