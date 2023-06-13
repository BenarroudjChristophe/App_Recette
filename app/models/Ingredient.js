const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connexionSequelize");

class Ingredient extends Sequelize.Model {}

Ingredient.init(
  {
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    macro: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "ingredient",
  }
);
module.exports = Ingredient;
