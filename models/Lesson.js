const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Lesson extends Model { }

Lesson.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        start_time: {
            type: DataTypes.TIME, 
            allowNull: false,            
        },

        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            //add validation for hour or halfhour.
        },

        rider_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'rider',
                key: 'id',
            },
        },

        instructor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'instructor',
                key: 'id',
            },
        },
        
        horse_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'horse',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'lesson',
    }
);

module.exports = Lesson;