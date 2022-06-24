const express = require("express");
const router = express();
const userRouter = require("./user");
const favoriteRouter = require("./favorite");
const commentRouter = require("./comment");
const animalRouter = require("./animal");
const speciesRouter = require("./species")

router.use("/user", userRouter);
router.use("/favorite", favoriteRouter);
router.use("/comment", commentRouter);
router.use("/animal", animalRouter);
router.use("/species", speciesRouter);

module.exports = router;
