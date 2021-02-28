const models = require('../models/index')
module.exports = {
    login: async (login, password) => {
        try {
            const user = await models.user.findOne({where: {login: login}})
            const loggedIn = await user.checkPassword(password)
            return loggedIn
        } catch(e){
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
        }catch (e) {
            console.log(e)
            if (e.errors[0].message === 'login must be unique')
                throw new Error('User already exist, try another login')
            else
                throw new Error('User can\'t be created')
        }
    },
    updateUser: ({name, login, password}) => {
        return null
    },
    deleteUser: () => {
        return false
    }
}