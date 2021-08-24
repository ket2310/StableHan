const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Rider extends Model { }

Rider.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,            
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        riding_freq: {
            type:DataTypes.STRING,
            allowNull: true,
        },

        formal_comp: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rider',
    }
);

module.exports = Rider;