const express = require("express");
const router = express.Router();
const FavoriteControllers = require("../controllers/FavoriteController");
const Favorite = require("../models/Favorite");

router.get("/:userId", FavoriteControllers.getById);
router.post("/add", FavoriteControllers.addOne);
router.delete("/:favoriteId", FavoriteControllers.deleteOne);

//añadir animal a favoritos
/* router.post("/add", (req, res) => {
  Favorite.create(req.body).then((newFavorite) =>
    res.status(201).send(newFavorite)
  );
  console.log(req.body);
}); */

//eliminar favorito
router.delete("/:favoriteId", (req, res) => {
  console.log("req.params.id :", req.body.animalId._id);
  Favorite.findOneAndRemove(req.body.animalId._id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;

/* //ver favoritos
router.get("/:userId", (req, res) => {
  Favorite.find({
    where: { userId: req.params.userId },
    include: Animal,
  }).then((favorite) => res.send(favorite));
});


//añadir animal a favoritos
router.post("/add", (req, res) => {
  Favorite.create(req.body).then((newFavorite) =>
    res.status(201).send(newFavorite)
  );
});


//eliminar favorito
router.delete("/delete", (req, res) => {
  Favorite.findByIdAndRemove(req.params.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}); */
