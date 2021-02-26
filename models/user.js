const bCrypt = require('bcrypt')

function cryptText(text, saltRounds){
    return bCrypt.hash(text, saltRounds)
}

module.exports = (sequelize, DataTypes) => {
    const saltRounds = 10

    const model = {
        name: DataTypes.STRING,
        login: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING
    }

    const user = sequelize.define('USER', model)

    user.beforeCreate(async (user) => {
        user.password = await cryptText(user.password, saltRounds)
    })

    user.beforeBulkUpdate(async (user) => {
        if (user.password != null)
            user.password = await cryptText(user.password, saltRounds)
    })

    return user
}