const User = require("../models/User");

class UserServices {
  //registrar usuario nuevo
  static async addOne(body) {
    try {
      await User.create(body);
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
  //login usuario con JWT

  //retornar usuario logeado
  static async getOne(id) {
    console.log("entra al get one services");
    try {
      const data = await User.findById(id).exec();
      console.log(data, 'data')
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
    try {
      await User.findByIdAndUpdate(id, body);
      return {
        error: false,
        data: "User updated successfully",
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
      const result = await User.findByIdAndDelete(id);
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

module.exports = UserServices;
