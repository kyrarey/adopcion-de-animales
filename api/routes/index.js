const express = require("express");
const appRoutes = express();
const animalsRouter = require("./animals");



appRoutes.use("/animals", animalsRouter);

module.exports = appRoutes;