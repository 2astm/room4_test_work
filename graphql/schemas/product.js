exports.Product = `
type Product{
    _id: ID!
    name: String
    description: String
    cost: Float    
    count: Int
    categoryId: ID!
}
`
exports.ProductInputData = `
input ProductInputData{
    name: String @constraint(pattern: "^[A-Zaz 0-9\']{4,30}$")
    description: String @constraint(maxLength: 1000)
    cost: Float  
    count: Int
    categoryId: ID!
}
`

exports.ProductQueries = `
    # Returns all products
    getProducts: [Product]!
`

exports.ProductMutable = `  
    # creates new product
    createProduct(productInput: ProductInputData!): Product!
    # creates new product
    updateProduct(productInput: ProductInputData!): Product!
    # creates new product
    deleteProduct(id: ID!): Boolean
`