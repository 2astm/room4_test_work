const {buildSchema} = require('graphql')
const userSchema = require('./schemas/user')
const productSchema = require('./schemas/product')
const categorySchema = require('./schemas/category')

module.exports = buildSchema(`
    ${userSchema.User}
    ${userSchema.UserInputData}
   
    ${productSchema.Product}
    ${productSchema.ProductInputData}
    
    ${categorySchema.Category}
    
    type Query {
        ${userSchema.UserQueries}
        ${productSchema.ProductQueries}
        ${categorySchema.CategoryQueries}
    }
    
    type Mutable {
        ${userSchema.UserMutable}
        ${productSchema.ProductMutable}
        ${categorySchema.CategoryMutable}
    }
`)