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
    name: String
    description: String
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