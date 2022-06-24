const mongoose = require("mongoose");
const Species = require('../models/Species')
// const User = require('../models/User')
const Animal = require("../models/Animal")
const axios = require("axios");

mongoose
  .connect("mongodb://localhost:27017/AnimalesFelices", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION");
  })
  .catch((err) => {
    console.log(err);
  });
  
  const species = [{SpeciesName:"Perro"},{SpeciesName:"Gato"}]

const fakeAnimals = [
  {
    animalname: "apolo",
    image: [
      "https://images7.alphacoders.com/329/thumbbig-329386.webp",
      "https://images4.alphacoders.com/223/thumbbig-223754.webp",
    ],
    fundationId: "1",
    location: "Zona oeste",
    size: "mediano",
    species: "perro",
    sex: "Macho",
    personality: "jugueton, demandante y carinoso",
    age: "4 anos",
  },
  {
    animalname: "Lola",
    image: [
      "https://images7.alphacoders.com/329/thumbbig-329386.webp",
      "https://images4.alphacoders.com/223/thumbbig-223754.webp",
    ],
    fundationId: "1",
    location: "Zona oeste",
    size: "mediano",
    species: "perro",
    sex: "Hembra",
    personality: "jugueton, demandante y carinoso",
    age: "4 anos",
  },
  {
    animalname: "Baco",
    image: [
      "https://images7.alphacoders.com/329/thumbbig-329386.webp",
      "https://images4.alphacoders.com/223/thumbbig-223754.webp",
    ],
    fundationId: "1",
    location: "Zona oeste",
    size: "mediano",
    species: "perro",
    sex: "Macho",
    personality: "jugueton, demandante y carinoso",
    age: "4 anos",
  },
  {
    animalname: "michi",
    image: [
        "https://images3.alphacoders.com/865/thumbbig-86537.webp",
        "https://images3.alphacoders.com/916/thumbbig-91659.webp",
    ],
    fundationId: "1",
    location: "CABA",
    size: "chiquito",
    species: "gato",
    sex: "Hembra",
    personality: "jugueton y carinoso",
    age: "2 anos",
  },
  {
    animalname: "michifus",
    image: [
        "https://images3.alphacoders.com/865/thumbbig-86537.webp",
        "https://images3.alphacoders.com/916/thumbbig-91659.webp",
    ],
    fundationId: "1",
    location: "CABA",
    size: "chiquito",
    species: "gato",
    sex: "Hembra",
    personality: "jugueton y carinoso",
    age: "2 anos",
  },
  {
    animalname: "miau",
    image: [
        "https://images3.alphacoders.com/865/thumbbig-86537.webp",
        "https://images3.alphacoders.com/916/thumbbig-91659.webp",
    ],
    fundationId: "1",
    location: "CABA",
    size: "chiquito",
    species: "gato",
    sex: "Hembra",
    personality: "jugueton y carinoso",
    age: "2 anos",
  },
];

const seedDb = async () => {
    await Animal.deleteMany();
    await Animal.insertMany(fakeAnimals);
    await Species.deleteMany();
    await Species.insertMany(species);
};

seedDb();
