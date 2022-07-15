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
      //console.log(`src/assets/img/users/${data.image}.jpg`)
      return {
        error: false,
        data: {
          id: data._id,
          name: data.name,
          lastname: data.lastname,
          username: data.username,
          email: data.email,
          location: data.location,
          age: data.age,
          city: data.city,
          housing: data.housing,
          houseIsRented: data.houseIsRented,
          havePets: data.havePets,
          isAllergic: data.isAllergic,
          isFormComplete: data.isFormComplete,
          bio: data.bio,
          image: fs.existsSync(`src/assets/img/users/${data.image}.jpg`) ? data.image : "no_user",
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
      //console.log("DATA", data)
      if (fs.existsSync("src/assets/img/users/01.jpg")) {
        let newFileName = `/${data.id}.jpg`;
        fs.rename(
          "src/assets/img/users/01.jpg",
          `src/assets/img/users${newFileName}`,
          (err) => {
            if (err) console.log(err);
          }
        );
      }
      const updatedData = await User.findById(id);
      //console.log("DATA ACTUALIZADA",updatedData)
      return {
        error: false,
        data: {
          _id: updatedData._id,
          name: updatedData.name,
          lastname: updatedData.lastname,
          username: updatedData.username,
          email: updatedData.email,
          bio: updatedData.bio,
          image: updatedData.image,
          location: updatedData.location,
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
