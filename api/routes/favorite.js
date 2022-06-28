const express = require("express");
const router = express.Router();
const FavoriteControllers = require("../controllers/AnimalController");

router.get("/:userId", FavoriteControllers.getAll);
router.post("/add", FavoriteControllers.addOne);
router.delete("/:favoriteId", FavoriteControllers.deleteOne);

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
