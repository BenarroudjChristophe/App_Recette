const { Recette } = require("../models");
const { Ingredient } = require("../models");
const { Category } = require("../models");

const recetteController = {
  recette: async (req, res) => {
    res.render("addRecette");
  },

  newRecette: async (req, res) => {
    try {
      const { name, description, macro, image, ingredient } = req.body;
      if (!name || !description || !macro || !ingredient) {
        return res.render("addRecette", {
          error: "Veuillez remplir tout les champs",
        });
      }

      const checkRecette = await Recette.findOne({ where: { name } });

      if (checkRecette) {
        res.render("addRecette", {
          error: "Cette recette est déjà en place",
        });
        return;
      }

      const recette = await Recette.create({
        name: name,
        description: description,
        macro: macro,
        image: image,
        ingredient_id: ingredient,
        category_id: 1,
      });
      res.render("index", { message: "Votre recette à été ajouté" });
    } catch (error) {
      console.log(error);
      res.render("addRecette");
    }
  },
};

module.exports = recetteController;
