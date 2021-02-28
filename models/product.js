module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        count: DataTypes.INTEGER
    })

    product.associate = (models) => {
        models.product.belongsTo(models.category, {
            foreignKey: "categoryId"
        })
    }
    return product
}