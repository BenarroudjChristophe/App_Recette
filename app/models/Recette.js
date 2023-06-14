const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connexionSequelize");

const Ingredient = require("./Ingredient.js");
const Category = require("./Category.js");

class Recette extends Sequelize.Model {}

Recette.init(
  {
    description: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    macro: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "recette",
  }
);

module.exports = Recette;
