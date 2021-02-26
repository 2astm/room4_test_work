const categoryResolver = require('./resolvers/category')
const productResolver = require('./resolvers/product')
const userResolver = require('./resolvers/user')
module.exports = {
    ...categoryResolver,
    ...productResolver,
    ...userResolver
}