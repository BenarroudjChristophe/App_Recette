const { Category } = require("../models");

const categoryController = {
  category: async (req, res) => {
    res.render("addCategory");
  },

  newCategory: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.render("addCategory", {
          error: "Le champ est vide, voyons.",
        });
      }

      const checkCategory = await Category.findOne({ where: { name } });

      if (checkCategory) {
        res.render("addCategory", {
          error: "Cette category est déjà est déjà connue de nos services",
        });
        return;
      }

      await Category.create({
        name: name,
      });
      res.render("index", { message: "Catégorie créée!" });
    } catch (error) {
      console.log(error);
      res.render("addCategory");
    }
  },
};
module.exports = categoryController;
