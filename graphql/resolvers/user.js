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
        const {name, login, password} = args.userInput
        const user = await userService.createUser(name, login, password)
        return user
    },

    updateUser: (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        return userService.updateUser(args.userInput, req.authorized)
    },

    deleteUser: (args, req) => {
        if (!req.authorized)
            throw new Error('UNAUTHORIZED')
        userService.deleteUser(req.authorized)
        return false
    }
}