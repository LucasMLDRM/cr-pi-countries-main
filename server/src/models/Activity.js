const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Activity = sequelize.define('Activity', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.STRING,
        }
    })
    return Activity
}