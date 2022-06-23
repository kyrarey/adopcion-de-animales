const express = require("express");
const userRouter = require("./user");
const favoriteRouter = require("./favorite");
const commentRouter = require("./comment");

const router = express.Router();

router.use("/user", userRouter);
router.use("/favorite", favoriteRouter);
router.use("/comment", commentRouter);

module.exports = router;
