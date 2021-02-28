const bCrypt = require('bcrypt')

function cryptText(text, saltRounds) {
    return bCrypt.hash(text, saltRounds)
}

module.exports = (sequelize, DataTypes) => {
    const saltRounds = 10

    const checkPassword = (passwordToCheck) => {
        console.log('checkPassword')
        return false//bCrypt.compare(passwordToCheck, this.password)
    }

    const model = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        login: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING
    }

    const user = sequelize.define('user', model)

    user.beforeCreate(async (newUser) => {
        newUser.password = await bCrypt.hash(newUser.password, saltRounds)
    })

    user.beforeBulkUpdate(async (newUser) => {
        if (newUser.password != null)
            newUser.password = await cryptText(newUser.password, saltRounds)
    })

    return user
}