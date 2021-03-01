const categoryService = require('../../services/category')
module.exports = {
    getCategories: async (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return await categoryService.getCategories()
    },
    createCategory: async (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        const name = args.categoryInput.name
        return await categoryService.createCategory(name)
    },
    updateCategory: async (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        const {id, name} = args.categoryInput
        return await categoryService.updateCategory(id, name)
    },
    deleteCategory: async ({id}, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return await categoryService.deleteCategory(id)
    }
}