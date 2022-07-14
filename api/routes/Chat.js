const express = require("express");
const router = express.Router();
const ChatControllers = require("../controllers/ChatController");
const Chat = require("../models/Chat")

router.get("/:foundationId", ChatControllers.getChat);
router.post("/", ChatControllers.addOne);
router.post("/update/:foundationId", ChatControllers.updateOne);


module.exports = router