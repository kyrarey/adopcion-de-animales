const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");
const db = require("../db/index");

// db.animals.createIndex({animalname: "text", sex:"text", age:"text", species: "text", location: "text"})

router.get("/:search", (req, res) => {

  const { error, data } = Animal.find({
    $text: { $search: req.params.search },
  })
  .then(data =>   res.status(200).send(data))

  if (error) {
    return res.status(404).send(data);
  }
});

module.exports = router;
