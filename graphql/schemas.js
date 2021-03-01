const userSchema = require('./schemas/user')
const productSchema = require('./schemas/product')
const categorySchema = require('./schemas/category')
const { makeExecutableSchema } = require ("@graphql-tools/schema")
const { constraintDirectiveTypeDefs, constraintDirective } = require('graphql-constraint-directive')

schema = `
    ${userSchema.User}
    ${userSchema.UserInputData}
    ${userSchema.UserTokenData}
   
    ${productSchema.Product}
    ${productSchema.ProductInputData}
    
    ${categorySchema.Category}
    ${categorySchema.CategoryInputData}
    
    type RootQuery  {
        ${userSchema.UserQueries}
        ${productSchema.ProductQueries}
        ${categorySchema.CategoryQueries}
    }
    
    "Edit data queries"
    type RootMutation  {
        ${userSchema.UserMutable}
        ${productSchema.ProductMutable}
        ${categorySchema.CategoryMutable}
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`
module.exports = makeExecutableSchema({
    typeDefs: [schema, constraintDirectiveTypeDefs], schemaTransforms: [constraintDirective()]
})