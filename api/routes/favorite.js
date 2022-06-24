const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite");

//añadir animal a favoritos
router.post("/add", (req, res) => {
  Favorite.create(req.body).then((newFavorite) =>
    res.status(201).send(newFavorite)
  );
});

//ver favoritos
router.get("/:userId", (req, res) => {
  Favorite.find({
    where: { userId: req.params.userId },
    include: Animal,
  }).then((favorite) => res.send(favorite));
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
});

module.exports = router;
