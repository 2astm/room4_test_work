
exports.User = `
type User{
    _id: ID!
    name: String 
    login: String!
    password: String!
}
`
exports.UserInputData = `
input UserInputData{
    name: String = "" @constraint(contains: "foo")
    login: String!
    password: String!
}
`

exports.UserTokenData = `
type UserTokenData{
    token: String! 
    expiredIn: Int!
}`

exports.UserQueries = `
    login(login: String!, password: String!): UserTokenData!
`

exports.UserMutable = `
    createUser(userInput: UserInputData!): User!
    updateUser(userInput: UserInputData!): User!
    deleteUser: Boolean
    
`