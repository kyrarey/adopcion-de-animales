require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "La constraseña debe tener cmo minimo 8 caracteres"],
      match: [/^[a-zA-Z0-9]+$/, "no es valida"], //caracteres permitidos
    },
    fundation: {
      type: Boolean,
      default: false,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    housing: {
      type: String,
      required: false,
    },
    houseIsRented: {
      type: Boolean,
      required: false,
    },
    havePets: {
      type: Boolean,
      required: false,
    },
    isAllergic: {
      type: Boolean,
      required: false,
    },
    isFormComplete: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  { timestamps: false }
);

// UserSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });



const User = mongoose.model("User", UserSchema);

module.exports = User;
