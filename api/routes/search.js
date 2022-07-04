const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");
const db = require ("../db/index")

// db.animals.createIndex({animalname: "text", sex:"text", age:"text", species: "text", location: "text"})

router.get("/:search", (req, res) => {
  console.log(req.params.search, " params");
  console.log(req.query, "   query")
  const { error, data } = Animal.find({
    $text: { $search: "\"buenos\"" },
  });
  console.log(error, " error ", data, " data ");
  if (error) {
    return res.status(404).send(data);
  }
  console.log("se hace un search");
  console.log(data, "   data");
  res.status(200).send(data);
});

module.exports = router;
