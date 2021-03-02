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
    createUser: (name, login, password) => {
        return models.user.create({
            name: name,
            login: login,
            password: password
        })
    },
    updateUser: async (args, userRequested) => {
        const res = await models.user.update(args, {returning: true, where: {id: userRequested.id}})
        if (res[1] && res[0] === 1)
            return res[1][0].dataValues
        else
            throw new Error('USER_NOT_FOUND')
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