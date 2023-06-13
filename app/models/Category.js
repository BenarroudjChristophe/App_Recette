const sequelize = require("../connexionSequelize");
const { Model, Sequelize, DataTypes } = require("sequelize");

class Category extends Sequelize.Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "categorie",
  }
);
module.exports = Category;
