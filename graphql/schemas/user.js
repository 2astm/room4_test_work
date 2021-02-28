
exports.User = `
# Type that describes User
type User{
    _id: ID!
    name: String
    login: String!
}
`
exports.UserInputData = `
input UserCreateData{
    name: String @constraint(pattern: "^[A-Za-z]{2,15}$")
    login: String! @constraint(pattern: "^[A-Za-z0-9]{4,16}$")
    password: String! @constraint(pattern: "^[A-Za-z0-9#$]{8,16}$")
}
input UserUpdateData{
    name: String @constraint(pattern: "^[A-Za-z]{2,15}$")
    login: String @constraint(pattern: "^[A-Za-z0-9]{4,16}$")
    password: String @constraint(pattern: "^[A-Za-z0-9#$]{8,16}$")
}
`

exports.UserTokenData = `
type UserTokenData{
    token: String! 
    expiredIn: String!
}`

exports.UserQueries = `
    login(userInput: UserCreateData!): UserTokenData!
`

exports.UserMutable = `
    createUser(userInput: UserCreateData!): User    
    updateUser(userInput: UserUpdateData!): User
    deleteUser: Boolean
    
`