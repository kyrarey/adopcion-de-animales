const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes");
require("./db");
const bodyParser = require("body-parser");
const app = express();
const axios = require ('axios')
const Chat = require ("./models/Chat")


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

const io = require('socket.io')(server, {
  cors:{
    origin:'*'
  }
})

  io.on('connection', async(socket) => {
    let messages = await Chat.find({})
    console.log("el usuario se connecto")
    socket.emit("Connect", messages)

    socket.on("disconnect", ()=> {
      console.log("el usuario se desconecto")
    })

  })




  // const res = await axios.get("/chat/pepito")
  // socket.emit("FromApi")



    
    // const getEmit = async(socket) =>{
    //   try{
    //     const res = await Chat.find()
    //     socket.emit("FromApi", res.data)
    //   }
    //   catch(error){console.log(error)}
    // }