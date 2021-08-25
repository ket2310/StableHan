const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Horse extends Model { }

Horse.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lessonCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lessonLimit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'horse',
    }
);

module.exports = Horse;