const debugCategory = {_id: 4, name: 'category1'}
module.exports = {
    getCategories: () => {
        return [debugCategory]
    },
    createCategory: ({name}) => {
        return debugCategory
    },
    updateCategory: ({_id, name}) => {
        return debugCategory
    },
    deleteCategory: (_id) => {
        return false
    }
}