const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: 'postgres',
        sync: {force: true}
    })

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

console.log(`db: ${Object.keys(db)}`)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db