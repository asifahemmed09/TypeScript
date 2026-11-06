const product1 = {
    name: "T-Shirt",
    price: 20
} as const

// product1.price = 24 //! can not possible to change a readonly properties
