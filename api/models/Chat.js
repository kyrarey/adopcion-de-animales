const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema(
  {
    user: {
        type: String,
        required: false,
    },
    foundation: {
        type: String,
        required: false,
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
