const debugUser = {_id: 4, name: 'user1', login: '123', password: ''}
const userService = require('../../services/user')
const jwt = require('jsonwebtoken')
const config = require('../../config/config')

module.exports = {
    login: async (args) => {
        const {login, password} = args.userInput
        const loggedIn = await userService.login(login, password)
        if (!loggedIn)
            throw new Error('LOGIN_UNSUCCESSFUL')
        const token = jwt.sign({data: {user: loggedIn}}, config.secretKey, {expiresIn: '1h'})
        return {token: token, expiredIn: "1h"}
    },

    createUser: async (args) => {
        console.log(args.userInput)
        const {name, login, password} = args.userInput
        const user = await userService.createUser(name, login, password)
        console.log(`${user.name}, ${user.login}, ${user.password}`)
        return user
    },

    updateUser: ({name, login, password}, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return debugUser
    },

    deleteUser: () => {
        return false
    }
}