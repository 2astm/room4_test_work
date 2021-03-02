const models = require('../models')
module.exports = {
    getCategories: () => {
        return models.category.findAll()
    },

    createCategory: (name) => {
        return models.category.create({
            name: name
        })
    },

    updateCategory: async (id, name) => {
        const res = await models.category.update({id: id, name: name}, {returning: true, where: {id: id}})
        if (res[1] && res[0] === 1)
            return res[1][0].dataValues
        else
            throw new Error('CATEGORY_NOT_FOUND')
    },

    deleteCategory: async (id) => {
        const res = await models.category.destroy({
            where: {
                id: id
            }
        })
        return res>0
    }
}