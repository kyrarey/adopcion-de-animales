const express = require("express");
const router = express();

const userRouter = require("./user");
const favoriteRouter = require("./favorite");
const commentRouter = require("./comment");
const animalRouter = require("./animal");

router.use("/user", userRouter);
router.use("/favorite", favoriteRouter);
router.use("/comment", commentRouter);
router.use("/animal", animalRouter);

module.exports = router;
