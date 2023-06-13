const { Router } = require("express");
const router = Router();

const appController = require("./controllers/appController.js");
const recetteControler = require("./controllers/recetteController.js");

router.get("/", appController.index);

router.post("/addRecette", recetteControler.newRecette);
router.get("/addRecette", recetteControler.recette);

module.exports = router;
