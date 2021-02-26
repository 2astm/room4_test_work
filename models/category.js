module.exports = (sequelize, DataTypes) => {
    const classMethods = {
        associate: models => {
            models.category.hasMany(models.product)
        }
    }

    const category = {
        nam2e: DataTypes.STRING
    }

    return sequelize.define('category', category, {classMethods})
}