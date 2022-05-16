'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'category_id' });
    }
  }

  Question.init({
    text: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    answer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
