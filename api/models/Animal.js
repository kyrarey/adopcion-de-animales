const mongoose = require("mongoose");

var AnimalSchema = new mongoose.Schema(
  {
    animalname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    history: {
      type: String,
    },
    image: {
      type: [Object],
      required: true,
    },
    fundationId: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    sex: {
      type: String, //or boolean?
      required: true,
    },
    personality: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    vaccines: {
      type: String,
    },
  },
  { timestamps: true }
);

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
