const models = require('../models/index')
module.exports = {
    login: async (login, password) => {
        try {
            const user = await models.user.findOne({where: {login: login}})
            console.log(`user: ${user}`)
            const loggedIn = await user.checkPassword(password)
            if (loggedIn)
                return user
            else
                return false
        } catch (e) {
            return false
        }
    },
    createUser: async (name, login, password) => {
        try {
            const user = await models.user.create({
                name: name,
                login: login,
                password: password
            })
            console.log(`User created: ${user.login}`)
            return user
        } catch (e) {
            console.log(e)
            if (e.errors[0].message === 'login must be unique')
                throw new Error('ERR_CREATE_USER_DUPLICATED_LOGIN')
            else
                throw new Error('ERR_CREATE_USER')
        }
    },
    updateUser: ({name, login, password}) => {
        return null
    },
    deleteUser: () => {
        return false
    }
}