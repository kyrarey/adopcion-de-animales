const express = require("express");
const router = express.Router();
const User = require("../models/User");
const db = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Register
router.post('/register', async (req, res) => {
  console.log(req.body, '            register')
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      ...req.body,
      password,
    };
    const user = await User.create(newUser);
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({user:req.body});
  const passwordIsCorrect =
    user === null
      ? false
      : await bcrypt.compare(req.body.password, user.password);
  if ((user && passwordIsCorrect)) {
    return res.status(401).json({
      error: 'invalid user or password',
    });
  }
  const userForToken = {
    id: user.id,
    mail: user.mail,
  };
  const token = jwt.sign(userForToken, "organizacion.messi");
  console.log(user)
  res.send({
    ...user.dataValues,
    token,
  });
});



//editar usuario
router.put("/:id", (req, res) => {
  User.findByPk({ where: { id: req.params.id } })
    .then((user) => {
      user.update(req.body);
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//retornar usuario logeado
router.get("/account", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});

//eliminar user
router.delete("/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      user.destroy(); //borra el usuario de la db(sequelize)
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(400).send(err);
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
