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

    return User;
};
