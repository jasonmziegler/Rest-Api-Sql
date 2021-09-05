'use strict';

const { Model, DataTypes } = require('sequelize');
const User = require('./user');

module.exports = (sequelize) => {
    class Course extends Model {}
    Course.init({
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      estimatedTime: {
        type: DataTypes.STRING,
      },
      materialsNeeded: {
        type: DataTypes.STRING
      },
      userId: { 
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        }
      },
    }, { sequelize });

    return Course;
};
