const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes");
require("./db");
const bodyParser = require("body-parser");
const app = express();


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
    origin:['*']
  }
})

io.on('connection', (socket) => {
  console.log("Se conecto un usuario")
  })
  
  const getEmit = async(socket) =>{
    try{
      socket.emit("FromApi")
    }
    catch(error){console.log(error)}
  }