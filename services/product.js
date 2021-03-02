const models = require('../models')
module.exports = {
    getProducts: () => {
        return models.product.findAll()
    },
    createProduct: (name, description, price, count, categoryId) => {
        return models.product.create({
            name: name,
            description: description,
            price: price,
            count: count,
            categoryId: categoryId
        })
    },
    updateProduct: async (args) => {
        console.log(args);
        const res = await models.product.update(args, {returning: true, where: {id: args.id}})
        if (res[1] && res[0] === 1)
            return res[1][0].dataValues
        else
            throw new Error('PRODUCT_CANNOT_FIND')
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