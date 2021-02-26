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
    name: String
    login: String!
    password: String!
}
`

exports.UserQueries = `
    login(login: String!, password: String!): String!
`

exports.UserMutable = `
    createUser(userInput: UserInputData!): User!
    updateUser(userInput: UserInputData!): User!
    deleteUser: Boolean
`