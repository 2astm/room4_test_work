exports.Category = `
        "# Object that describes category"
    type Category{
        id: ID!
        name: String! @constraint(pattern: "^[A-Za-z 0-9]{3,20}$")
    }
`

exports.CategoryInputData = `
    """
        # CategoryCreateData object:
        Used for create category
    """
    input CategoryCreateData{
        """
            # name - name of category(necessary attribute)
            characters allowed: **A-Z, a-z, 0-9, '**  
            min length: **2**  
            max length: **20**  
        """
        name: String!  @constraint(pattern: "^[A-Za-z0-9 ']{2,20}$")
    }
    
    """
        # CategoryUpdateData object:
        Used for update category
    """
    input CategoryUpdateData{
        """
            # id - id of category(necessary attribute)
        """
        id: ID!
        """
            # name - name of category(necessary attribute)  
            characters allowed: **A-Z, a-z, 0-9, '**  
            min length: **2**  
            max length: **20**  
        """
        name: String!  @constraint(pattern: "^[A-Za-z0-9 ']{2,20}$")
    }
`

exports.CategoryQueries = `
    """
        Returns array of categories
        **Auth token is needed**
    """
    getCategories: [Category]!
`

exports.CategoryMutable = `
    """
        Create new category  
        **Auth token is needed**  
        **Name of category should be provided**
    """
    createCategory(categoryInput: CategoryCreateData!): Category!
    """
        Update category  
        **Auth token is needed**  
        **Name of category should be provided**
    """
    updateCategory(categoryInput: CategoryUpdateData!): Category!
    """
        Delete category  
        **Auth token is needed**    
        **Id of category is needed**
    """
    deleteCategory(id: ID!): Boolean
`