exports.User = `
    "# Object that describes user"
type User{
    id: ID!
    name: String
    login: String!
}
`

exports.UserInputData = `
"""
    # UserCreateData object:
     used for create user
"""
input UserCreateData{
    """
        # name - name of user
        characters allowed: **A-Z, a-z**  
        min length: **2**  
        max length: **15**  
    """
    name: String @constraint(pattern: "^[A-Za-z]{2,15}$")
    """
        # login - login of user(necessary attribute)  
        characters allowed: **A-Z, a-z, 0-9**  
        min length: **4**,  
        max length: **16**  
    """
    login: String! @constraint(pattern: "^[A-Za-z0-9]{4,16}$")
    """
        # password - password of user(necessary attribute)
        characters allowed: **A-Z, a-z, 0-9, #, $**  
        min length: **8**,  
        max length: **16**  
    """
    password: String! @constraint(pattern: "^[A-Za-z0-9#$]{8,16}$")
}

"""
    # UserUpdateData object:
     used for update user
"""
input UserUpdateData{
    """
        # Name - name of user
        characters allowed: **A-Z, a-z**  
        min length: **2**  
        max length: **15**  
    """
    name: String @constraint(pattern: "^[A-Za-z]{2,15}$")
    """
        # login - login of user
        characters allowed: **A-Z, a-z, 0-9**  
        min length: **4**,  
        max length: **16**  
    """
    login: String @constraint(pattern: "^[A-Za-z0-9]{4,16}$")
    """
        # password - password of user(necessary attribute)
        characters allowed: **A-Z, a-z, 0-9, #, $**  
        min length: **8**,  
        max length: **16**  
    """
    password: String @constraint(pattern: "^[A-Za-z0-9#$]{8,16}$")
}
`

exports.UserTokenData = `
"""
    # User token data
    object which returned after login query
"""
type UserTokenData{
    token: String! 
    expiredIn: String!
}`

exports.UserQueries = `
        "Need to take authorization token"
    login(userInput: UserCreateData!): UserTokenData!
`

exports.UserMutable = `
        "Need to create User"
    createUser(userInput: UserCreateData!): User    
    """
        Need to update User  
        **Auth token is needed**  
        **One of UserUpdateData attribute should be provided**
    """
    updateUser(userInput: UserUpdateData!): User
    """
        Returned true if user deleted  
        **Auth token is needed**
    """
    deleteUser: Boolean
    
`