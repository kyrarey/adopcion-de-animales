const express = require("express");
const app = express();
const routes = require("./routes/index");
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

const port = 8080;

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("Server running in port", port);
  });
});
