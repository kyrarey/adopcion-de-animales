const express = require("express");
const router = express.Router();
const SpeciesController = require("../controllers/SpecieController");

router.get("/", SpeciesController.getAll);
router.delete("/:id", SpeciesController.removeSpecies);
router.post("/", SpeciesController.createSpecies);
router.put("/:id", SpeciesController.getUpdate);

module.exports = router;