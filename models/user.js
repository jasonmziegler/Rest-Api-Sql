'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {}
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        emailAddress: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.VIRTUAL,
        },
        confirmedPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { sequelize });

    // Define Model Associations
    // In the Users model, add a one-to-many association between the User and Course models using the hasMany() method.
    // User.associate = (models) => {
    //     // Add Associations
    //     User.hasMany(models.Course);
    // }


    return User;
};
