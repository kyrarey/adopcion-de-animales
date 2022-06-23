const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    animals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet", //array de obj
      },
    ],
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
