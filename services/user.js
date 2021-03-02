const models = require('../models/index')
module.exports = {
    login: async (login, password) => {
        try {
            const user = await models.user.findOne({where: {login: login}})
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
        return await models.user.create({
            name: name,
            login: login,
            password: password
        })
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
        return res > 0
    }
}