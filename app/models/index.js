const Recette = require("./Recette");
const Ingredient = require("./Ingredient");
const Category = require("./Category");
const RecetteIngredient = require("./RecetteIngredient");

// association ingredients et recettes

Ingredient.belongsToMany(Recette, {
  as: "recettes",
  through: "RecetteIngredients",
  foreignKey: "ingredient_id",
  otherKey: "recette_id",
});

Recette.belongsToMany(Ingredient, {
  as: "ingredients",
  through: "RecetteIngredients",
  foreignKey: "recette_id",
  otherKey: "ingredient_id",
});

// association categories et recettes

Category.hasMany(Recette, {
  foreignKey: "category_id",
  as: "recettes",
});

Recette.belongsTo(Category, {
  foreignKey: "category_id",
  as: "categories",
});

module.exports = { Recette, Category, Ingredient, RecetteIngredient };
