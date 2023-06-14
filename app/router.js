const { Router } = require("express");
const router = Router();

const appController = require("./controllers/appController.js");
const recetteControler = require("./controllers/recetteController.js");
const categoryController = require("./controllers/categoryController.js");

router.get("/", appController.index);

router.post("/addRecette", recetteControler.newRecette);
router.get("/addRecette", recetteControler.recette);

router.get("/addCategory", categoryController.category);
router.post("/addCategory", categoryController.newCategory);

module.exports = router;
