module.exports = (sequelize, DataTypes) => {
    const category = {
        nam2e: DataTypes.STRING
    }

    return sequelize.define('CATEGORY', category)
}