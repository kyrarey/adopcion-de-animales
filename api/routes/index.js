const express = require("express");
const router = express();
const userRouter = require("./user");
const favoriteRouter = require("./favorite");
const commentRouter = require("./comment");
const animalRouter = require("./animal");
const speciesRouter = require("./species")
const userFoundationRouter = require("./userFoundation")
const searchRouter = require("./search")
const chatRouter = require("./Chat")

router.use("/user", userRouter);
router.use("/favorite", favoriteRouter);
router.use("/comment", commentRouter);
router.use("/animal", animalRouter);
router.use("/species", speciesRouter);
router.use("/orgs", userFoundationRouter);
router.use("/search", searchRouter);
router.use("/chat", chatRouter)

module.exports = router;
