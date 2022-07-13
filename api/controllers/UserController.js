const UserServices = require("../services/User");

class UserControllers {
  //registrar usuario nuevo
  static async addOne(req, res) {
    const { error, data } = await UserServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  //login usuario con JWT

  //retornar usuario logeado
  static async getOne(req, res) {
    console.log("entra al controller",req.params)
    const { error, data } = await UserServices.getOne(req.params.userId);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //logout user

  //editar usuario
  static async updateOne(req, res) {
    const { error, data } = await UserServices.updateOne(
      req.params.userId,
      req.body,
    );

    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //eliminar user
  static async deleteOne(req, res) {
    const { error, data } = await UserServices.deleteOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }
}

module.exports = UserControllers;
