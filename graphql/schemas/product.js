exports.Product = `
"# Object that describes product"
type Product{
    id: ID!
    name: String
    description: String
    price: Float    
    count: Int
    categoryId: ID!
}
`
exports.ProductInputData = `
"""
    # ProductCreateData object:
    used for create product
"""
input ProductCreateData{
    """
        # name - name of product(necessary attribute)
        characters allowed: **A-Z, a-z, 0-9, '**  
        min length: **4**  
        max length: **30**  
    """
    name: String! @constraint(pattern: "^[A-Za-z 0-9\']{4,30}$")
    """
        # Description - description of product(necessary attribute) 
        max length: **1000**  
    """
    description: String! @constraint(maxLength: 1000)
    """
        # Price - price of product
        min value: **0**
    """
    price: Float @constraint(min: 0)
    """
        # Count - count of products
        min value: **0**
    """
    count: Int @constraint(min: 0)
    """
        # categoryId - id of category(necessary attribute)
    """
    categoryId: ID!
}
"""
    # ProductUpdateData object:
    used for update product
"""
input ProductUpdateData{
    """
        # id - id of product (necessary attribute)
    """
    id: ID!
    """
        # Name - name of product
        characters allowed: **A-Z, a-z, 0-9, '**  
        min length: **4**  
        max length: **30**  
    """
    name: String @constraint(pattern: "^[A-Za-z 0-9\']{4,30}$")
    """
        # Description - description of product
        max length: **1000**  
    """
    description: String @constraint(maxLength: 1000)
    """
        # Price - price of product
        min value: **0**
    """
    price: Float @constraint(min: 0)
    """
        # Count - count of products
        min value: **0**
    """
    count: Int @constraint(min: 0)
    """
        # categoryId - id of category
    """
    categoryId: ID
}
`

exports.ProductQueries = `
    """
        Returns all products  
        **Auth token is needed**    
    """
    getProducts: [Product]!
`

exports.ProductMutable = `  
    """
        Create new product  
        **Auth token is needed**  
    """
    createProduct(productInput: ProductCreateData!): Product!
    """
        Update product  
        **Auth token is needed**  
        **id and one of productUpdateData attributes are needed**
    """
    updateProduct(productInput: ProductUpdateData!): Product!
    """
        Delete product  
        **Auth token is needed**  
    """
    deleteProduct(id: ID!): Boolean
`