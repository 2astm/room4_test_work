const {buildSchema} = require('graphql')
const userSchema = require('./schemas/user')
const productSchema = require('./schemas/product')
const categorySchema = require('./schemas/category')

module.exports = buildSchema(`
    ${userSchema.User}
    ${userSchema.UserInputData}
    ${userSchema.UserTokenData}
   
    ${productSchema.Product}
    ${productSchema.ProductInputData}
    
    ${categorySchema.Category}
    
    type RootQuery  {
        ${userSchema.UserQueries}
        ${productSchema.ProductQueries}
        ${categorySchema.CategoryQueries}
    }
    
    type RootMutation  {
        ${userSchema.UserMutable}
        ${productSchema.ProductMutable}
        ${categorySchema.CategoryMutable}
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }

`)