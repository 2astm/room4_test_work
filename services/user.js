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
            return await models.user.create({
                name: name,
                login: login,
                password: password
            })
        } catch (e) {
            console.log(e)
            if (e.errors[0].message === 'login must be unique')
                throw new Error('ERR_CREATE_USER_DUPLICATED_LOGIN')
            else
                throw new Error('ERR_CREATE_USER')
        }
    },
    updateUser: async (args, userRequested) => {
        const user = await models.user.findByPk(userRequested.id)
        Object.keys(args).forEach((arg) => {
            user[arg] = args[arg]
        })
        user.save()
        return user
    },
    deleteUser: async (userRequested) => {
        const res = await models.user.destroy({
            where: {
                id: userRequested.id
            }
        })
        return res>0
    }
}