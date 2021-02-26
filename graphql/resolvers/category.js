const debugCategory = {_id: 4, name: 'category1'}
module.exports = {
    getCategories: () => {
        return [debugCategory]
    },
    create4Category: ({name}) => {
        return debugCategory
    },
    updateCategory: ({_id, name}) => {
        return debugCategory
    },
    deleteUser: (_id) => {
        return false
    }
}