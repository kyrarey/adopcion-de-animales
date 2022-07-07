const mongoose = require("mongoose");

const UserFoundationSchema = new mongoose.Schema(
  {
    foundationName: {
      type: String,
      required: true,
    },
    petsForAdoption:{
        type: Array,
    },
    internUsers: {
      type: [Object],
    },
    image: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    description:{
        type: String,
    },
    email:{
      type: String,
      required: false,
    },
    password:{
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);



const UserFoundation = mongoose.model("UserFoundation", UserFoundationSchema);

module.exports = UserFoundation;
