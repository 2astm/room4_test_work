const models = require('../models')
module.exports = {
    getProducts: async () => {
        return await models.product.findAll()
    },
    createProduct: async (name, description, price, count, categoryId) => {
        console.log(categoryId)
        return await models.product.create({
            name: name,
            description: description,
            price: price,
            count: count,
            categoryId: categoryId
        })
    },
    updateProduct: async (args) => {
        const product = await models.product.findByPk(args.id)
        if (product === null)
            throw new Error('PRODUCT_CANNOT_FIND')
        Object.keys(args).forEach((arg) => {
            if (arg !== 'id')
                product[arg] = args[arg]
        })
        product.save()
        return product
    },
    deleteProduct: async (id) => {
        const res = await models.product.destroy({
            where: {
                id: id
            }
        })
        return res>0
    }
}