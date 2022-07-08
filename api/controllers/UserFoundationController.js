const UserFoundationServices = require("../services/UserFoundation");

class UserControllers {
  //registrar usuario nuevo
  static async addOne(req, res) {
    const { error, data } = await UserFoundationServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  static async getAll(req, res) {
    const { error, data } = await UserFoundationServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //login usuario con JWT

  //retornar usuario logeado
  static async getOne(req, res) {
    /* console.log("req.params: ", req.params); */
    const { error, data } = await UserFoundationServices.getOne(req.params.userId);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //logout user

  //editar usuario
  static async updateOne(req, res) {
    const { error, data } = await UserFoundationServices.updateOne(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async addPets(req, res) {
    /* console.log(req.params, "params control", req.body) */
    const { error, data } = await UserFoundationServices.addPets(
      req.params.userId,
      req.body
    );
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //eliminar user
  static async deleteOne(req, res) {
    const { error, data } = await UserFoundationServices.deleteOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }
}

module.exports = UserControllers;
