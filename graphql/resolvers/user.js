const debugUser = {_id: 4, name: 'user1', login: '123', password: ''}
const userSerivce = require('../../services/user')
module.exports = {
    login: async ({login, password}) => {
        const loggedIn = await userSerivce.login(login, password)
        console.log(loggedIn)
        return {token: "asd", expiredIn: 1}
    },
    createUser: async (args) => {
        const {name, login, password} = args.userInput
        return await userSerivce.createUser(name, login, password)
    },
    updateUser: ({name, login, password}) => {
        return debugUser
    },
    deleteUser: () => {
        return false
    }
}