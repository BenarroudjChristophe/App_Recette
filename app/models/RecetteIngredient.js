const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connexionSequelize");

const Ingredient = require("./Ingredient");
const Recette = require("./Recette");

class RecetteIngredient extends Sequelize.Model {}

RecetteIngredient.init(
  {
    recette_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: "RecetteIngredient",
  }
);

module.exports = RecetteIngredient;
