const express = require("express");
const router = express.Router()
const AnimalControllers = require("../controllers/AnimalController")


router.get("/all",AnimalControllers.getAll)
router.get("/:id",AnimalControllers.getOne)
router.get("/name/:name",AnimalControllers.getAllByName)
router.get("/foundation/:foundationId",AnimalControllers.getAllByFoundation)
router.post("/",AnimalControllers.addOne)
router.put("/:id",AnimalControllers.updateOne)
router.delete("/:id",AnimalControllers.deleteOne)
router.get("/species/:species",AnimalControllers.getAllBySpecie)

// router.get("/:id/reviews", AnimalControllers.getReviews)
// router.post("/:id/reviews", AnimalControllers.addReviews)

//searchbyTitle
// router.get("/searchByTitle/:title", AnimalControllers.searchByTitle)

module.exports = router;