module.exports = (sequelize, DataTypes) => {

    const classMethods = {
        associate: models => {
            models.product.hasOne(models.category)
        }
    }

    const model = {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        count: DataTypes.INTEGER
    }

    return sequelize.define('product', model, {classMethods})
}