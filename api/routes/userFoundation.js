const express = require("express");
const router = express.Router();
const UserFoundation = require("../models/UserFoundation");
const UserFoundationControllers = require("../controllers/UserFoundationController");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const multer = require("multer");

//This code allows you to save a file, which was sent via frontend form, on the server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "orgs-front/src/assets/img/foundations");
    cb(null, "src/assets/img/foundations");
  },
  filename: function (req, file, cb) {
    cb(null, "new.jpg");
  },
});
const upload = multer({ storage: storage });

//router.post("/register", UserFoundationControllers.addOne);
router.get("/all", UserFoundationControllers.getAll);
router.get("/account/:userId", UserFoundationControllers.getOne);
router.get("/key/:keyId", UserFoundationControllers.getOneByKey); //busca una fundación cuando se conoce su key llamado image
router.put("/:userId", upload.single("photo"), UserFoundationControllers.updateOne);
router.post("/addpets/:userId", UserFoundationControllers.addPets);
router.delete("/:userId", UserFoundationControllers.deleteOne);




// Register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      ...req.body,
      password,
    };
    const user = await UserFoundation.create(newUser);
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  const user = await UserFoundation.findOne({email:req.body.email});
  const passwordIsCorrect =
    user === null
      ? false
      : await bcrypt.compare(req.body.password, user.password);
  if (!(user && passwordIsCorrect)) {
    return res.status(401).json({
      error: "invalid user or password",
    });
  }
  // console.log(user)
  const userForToken = {
    id: user.id,
    mail: user.mail,
  };
  const token = jwt.sign(userForToken, "organizacion.messi");
  // console.log(user, '   user')
  res.send({
    ...user._doc,
    token,
  });
});

//logout user
router.get("/logout", function (req, res) {
  req.session.destroy(() => {
    req.logout();
    res.redirect("/");
  });
});



module.exports = router;