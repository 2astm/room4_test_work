const productService = require('../../services/product')
module.exports = {
    getProducts: (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return productService.getProducts()
    },
    createProduct: async (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        const {name, description, cost, count, categoryId} = args.productInput
        return await productService.createProduct(name, description, cost, count, categoryId)
    },
    updateProduct: async (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return await productService.updateProduct(args.productInput)
    },
    deleteProduct: async (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return await productService.deleteProduct(args.id)
    }
}