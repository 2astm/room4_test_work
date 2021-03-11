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
    updateUser: async (args, userRequestedId) => {
        const res = await models.user.update(args, {returning: true, where: {id: userRequestedId}})
        if (res[1] && res[0] === 1)
            return res[1][0].dataValues
        else
            throw new Error('USER_NOT_FOUND')
    },
    deleteUser: async (userRequestedId) => {
        const res = await models.user.destroy({
            where: {
                id: userRequestedId
            }
        })
        return res > 0
    }
}