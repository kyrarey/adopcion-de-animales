const express = require("express");
const router = express.Router();
const User = require("../models/User");
const db = require("../db")

//registrar usuario nuevo
router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//login usuario con JWT
router.post("/login", (req,res) =>{
  User.find(req.user.data)
  .then((user) => { 
    res.status(201).send(user)
  })
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
