const express = require("express");
const router = express.Router()
const AnimalControllers = require("../controllers/AnimalController")
const multer = require("multer");

//This code allows you to save a file, which was sent via frontend form, on the server
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "orgs-front/src/assets/img/pets");
      cb(null, "src/assets/img/pets");
    },
    filename: function (req, file, cb) {
      // console.log(req)
      if(file.fieldname==="photo1") cb(null, "01.jpg");
      else if(file.fieldname==="photo2") cb(null, "02.jpg");            
      else if(file.fieldname==="photo3") cb(null, "03.jpg");
    },
  });

const upload = multer({ storage: storage });

router.get("/all",AnimalControllers.getAll)
router.get("/:id",AnimalControllers.getOne)
router.get("/name/:name",AnimalControllers.getAllByName)
router.get("/foundation/:foundationId",AnimalControllers.getAllByFoundation)
router.post("/",AnimalControllers.addOne)
router.put("/:id",upload.fields([{ name: 'photo1', maxCount: 1 }, { name: 'photo2', 
maxCount: 1 }, { name: 'photo3', maxCount: 1 }]),AnimalControllers.updateOne)
router.delete("/:id",AnimalControllers.deleteOne)
router.get("/species/:species",AnimalControllers.getAllBySpecie)


// router.get("/:id/reviews", AnimalControllers.getReviews)
// router.post("/:id/reviews", AnimalControllers.addReviews)

//searchbyTitle
// router.get("/searchByTitle/:title", AnimalControllers.searchByTitle)

module.exports = router;