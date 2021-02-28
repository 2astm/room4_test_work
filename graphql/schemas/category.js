exports.Category = `
type Category{
    _id: ID!
    name: String! @constraint(pattern: "^[A-Za-z 0-9]{3,20}$")
}
`

exports.CategoryQueries = `
    # Returns array of products
    getCategories: [Category]!
`

exports.CategoryMutable = `
    createCategory(name: String!): Category!
    updateCategory(_id: ID!, name: String!): Category!
    deleteCategory(_id: ID!): Boolean
`