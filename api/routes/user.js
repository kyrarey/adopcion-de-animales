const express = require("express");
const router = express.Router();
const User = require("../models/User");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const UserControllers = require("../controllers/UserController");
const nodemailer = require("nodemailer")

//This code allows you to save a file, which was sent via frontend form, on the server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/assets/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, "01.jpg");
  },
});
const upload = multer({ storage: storage });

//router.post("/register", UserControllers.addOne);
router.get("/all", UserControllers.getAll);
router.get("/account/:userId", UserControllers.getOne);
router.put("/:userId", upload.single("photo"), UserControllers.updateOne);
router.get("/logout", UserControllers.deleteOne);

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      ...req.body,
      password,
    };
    const user = await User.create(newUser);
    (async () => {
      try{
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'gastonchemi@gmail.com',
              pass: 'yxafglrxkbnguphk'
          }
      });
  let mailOptions = {
    from: "Ceibo",
    to: "gastonchemi@gmail.com",
    subject: "Confirmacion de usuario",
    text: "Su usuario se ah creado correctamente"
  }
  transporter.sendMail(mailOptions,(error, info) =>{
    if(error) {
      res.status(500).send(error.message)
    } else{ 
      // console.log("email enviado")
      res.status(200).json(req.body)
    } 
  })
} catch (error) {
  console.log(error.message)
}
    })()
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const passwordIsCorrect =
    user === null
      ? false
      : await bcrypt.compare(req.body.password, user.password);
  if (!(user && passwordIsCorrect)) {
    return res.status(401).json({
      error: "invalid user or password",
    });
  }
  const userForToken = {
    id: user.id,
    mail: user.mail,
  };
  const token = jwt.sign(userForToken, "organizacion.messi");

  res.send({
    ...user._doc,
    token,
  });
});

module.exports = router;
