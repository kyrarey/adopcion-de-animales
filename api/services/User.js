const User = require("../models/User");
const fs = require("fs");

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
    //console.log("entra al get one services");
    try {
      const data = await User.findById(id).exec();

      return {
        error: false,
        data: {
          id: data._id,
          name: data.name,
          lastname: data.lastname,
          username: data.username,
          email: data.email,
          bio: data.bio,
          image: fs.existsSync(`src/assets/img/users/${data.image}.jpg`)
            ? data.image
            : "no_user",
          location: data.location,
        },
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
      const data = await User.findByIdAndUpdate(id, body);
      //console.log("BODY", body)
      if (fs.existsSync("src/assets/img/users/01.jpg")) {
        data.image = `/${data.id}.jpg`;
        fs.rename(
          "src/assets/img/users/01.jpg",
          `src/assets/img/users${data.image}`,
          (err) => {
            if (err) console.log(err);
          }
        );
      }
      return {
        error: false,
        data: {
          id: data._id,
          name: data.name,
          lastname: data.lastname,
          username: data.username,
          email: data.email,
          bio: data.bio,
          image: data.image,
          location: data.location,
        },
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
      const result = await User.findByIdAndRemove(id);
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
