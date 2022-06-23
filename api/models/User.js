require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
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
      required: true,
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
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
}); //JWT incomplete

const User = mongoose.model("User", UserSchema);

module.exports = User;
