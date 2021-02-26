const debugProduct = {_id: 4, name: 'product1', description: 'empty description', cost: 1.2, categoryId: 4}
module.exports = {
    getProducts: () => {
        return [debugProduct]
    },
    createProduct: ({name, description, cost, count, categoryId}) => {
        return debugProduct
    },
    updateProduct: ({name, description, cost, count, categoryId}) => {
        return debugProduct
    },
    deleteProduct: ({id}) => {
        return false
    }
}