const mongoose = require("mongoose");

var AnimalSchema = new mongoose.Schema(
  {
    animalname: {
      type: String,
      required: true,
    },
    history: {
      type: String,
    },
    image: {
      type: [Object], //cambio, era un STRING para poder almacenar varias fotos del animal
      required: false, //cambiado a false por Cris
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

AnimalSchema.index({ animalname: "text", sex: "text", age: "text", species: "text", location: "text" });
const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;