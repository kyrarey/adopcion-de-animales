const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes");
require("./db");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const Chat = require("./models/Chat");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use(
  session({
    secret: "AnimalesFelices",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", router);

const server = app.listen(3030, () => {
  console.log(`Servidor corriendo en el puerto 3030`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // let messages = await Chat.find({})
  // socket.emit("Connect", messages);
  socket.on("Connect", async () => {
    console.log("el usuario se connecto");

    try {
      const allChats = await Chat.find({})
      // console.log(allChats, " allchast");
      socket.emit("load chats", allChats);
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("disconnect", () => {
    console.log("el usuario se desconecto");
  });

  socket.on("send message", function (data) {
    console.log(data, "llego el submit");
    io.sockets.emit("new message", data);
  });
});


