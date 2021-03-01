module.exports = (sequelize, DataTypes) => {

    const category = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING
    })

    category.associate = (models) => {
        models.category.hasMany(models.product, {onDelete: 'cascade'})
    }

    return category
}