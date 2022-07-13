const express = require("express");
const router = express.Router();
const ChatControllers = require("../controllers/ChatController");
const Chat = require("../models/Chat")

router.get("/:userId", ChatControllers.getChat);
router.post("/", ChatControllers.addOne);

module.exports = router