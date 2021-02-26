exports.Category = `
type Category{
    _id: ID!
    name: String!
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