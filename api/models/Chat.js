const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema(
  {
    user: {
        type: String,
        required: false,
    },
    userName: {
      type:String
    },
    foundation: {
        type: String,
        required: false,
    },
    foundationName:{
      type: String,
    },
    content: {
        type: [Object],
        required: false,
    },
  },
  { timestamps: true }
);


const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
