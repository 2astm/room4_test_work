module.exports = (sequelize, DataTypes) => {
    const model = {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        count: DataTypes.INTEGER
    }

    return sequelize.define('PRODUCT', model)
}