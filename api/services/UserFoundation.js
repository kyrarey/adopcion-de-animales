const UserFoundation = require("../models/UserFoundation");

class UserFoundationServices {
  //registrar usuario nuevo
  static async addOne(body) {
    try {
      await UserFoundation.create(body);
      return {
        error: false,
        data: body,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
  }

  static async getAll(params) {
    try {
      const data = await UserFoundation.find(params).exec();
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: page not found",
      };
    }
  }
  //login usuario con JWT

  //retornar usuario logeado
  static async getOne(id) {
    console.log("este es el id de fund: ", id);
    try {
      const data = await UserFoundation.findById(id).exec();
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error, "    error");
      return {
        error: true,
        data: "error 404: User not found",
      };
    }
  }

  //logout user

  //editar usuario
  static async updateOne(id, body) {
    console.log("entra en el update", body);
    try {
      const data = await UserFoundation.findByIdAndUpdate(id, body);
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: User not found, changes couldn't be made",
      };
    }
  }

  static async addPets(id, body) {
    console.log("entra en el update", id ,(Object.keys(body)[0]));
    try {
      const data = await UserFoundation.updateOne(
        { _id: id },
        { $push: { petsForAdoption: (Object.keys(body)[0]) } }
      );
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: User not found, changes couldn't be made",
      };
    }
  }

  //eliminar user
  static async deleteOne(id) {
    try {
      const result = await UserFoundation.findByIdAndDelete(id);
      return {
        error: false,
        data: "User deleted successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error: couldn't delete user, it doesn't exist.",
      };
    }
  }
}

module.exports = UserFoundationServices;
