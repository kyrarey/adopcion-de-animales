const mongoose = require("mongoose");

var AnimalSchema = new mongoose.Schema(
  {
    animalname: {
      type: String,
      required: true,
    },
    history: {
      type: Text, //cambiado a text por Cris
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
      type: Text, //cambiado a text por Cris
      required: true,
    },
    age:{                   //AGREGADO POR FABRI
        type: String,
    },
    vaccines:{                   //AGREGADO POR CRIS
      type: String,
  },
},
  { timestamps: true }
);

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;

