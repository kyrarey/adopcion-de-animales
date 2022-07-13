const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");
const db = require("../db/index");

router.get("/:type/:input", (req, res) => {
  if (req.params.type === "location") {
    const { error, data } = Animal.find({
      location: req.params.input,
    }).then((data) => res.status(200).send(data));

    if (error) {
      return res.status(404).send(data);
    }
  }

  if (req.params.type === "age") {
    const { error, data } = Animal.find({
      age: req.params.input,
    }).then((data) => res.status(200).send(data));

    if (error) {
      return res.status(404).send(data);
    }
  }

  if (req.params.type === "sex") {
    const { error, data } = Animal.find({
      sex: req.params.input,
    }).then((data) => res.status(200).send(data));

    if (error) {
      return res.status(404).send(data);
    }
  }

  if (req.params.type === "species") {
    const { error, data } = Animal.find({
      species: req.params.input,
    }).then((data) => res.status(200).send(data));

    if (error) {
      return res.status(404).send(data);
    }
  }
});

module.exports = router;
