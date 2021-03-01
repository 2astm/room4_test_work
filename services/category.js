const models = require('../models')
module.exports = {
    getCategories: async () => {
        return await models.category.findAll()
    },

    createCategory: async (name) => {
        return await models.category.create({
            name: name
        })
    },

    updateCategory: async (id, name) => {
        const category = await models.category.findByPk(id)
        category.name = name
        category.save()
        return category
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