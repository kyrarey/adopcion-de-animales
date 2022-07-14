const UserFoundation = require("../models/UserFoundation");
const fs = require("fs");

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
    /* console.log("este es el id de fund: ", id); */
    try {
      const data = await UserFoundation.findById(id).exec();
      return {
        error: false,
        data: {
          id: data._id,
          foundationName: data.foundationName,
          internUsers: data.internUsers,
          image: fs.existsSync(`src/assets/img/foundations/${data.image}.jpg`) ? data.image : "no_user",
          location: data.location,
          description: data.description,
          email: data.email
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

  //retornar la info de la fundación haciendo una búsqueda por una key determinada
  static async getOneByKey(image) {
    try {
      const data = await UserFoundation.find({image: image}).exec();
      //console.log("DATA",data)
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error, "    error");
      return {
        error: true,
        data: "error 404: Animal not found",
      };
    }
  }
  //logout user

  //editar usuario
  static async updateOne(id, body) {
    //console.log("entra en el update", body);
    try {
      const data = await UserFoundation.findByIdAndUpdate(id, body);
      if (fs.existsSync("src/assets/img/foundations/new.jpg")) {
        let newFileName = `/${data.id}.jpg`;
        fs.rename(
          "src/assets/img/foundations/new.jpg",
          `src/assets/img/foundations${newFileName}`,
          (err) => {
            if (err) console.log(err);
          }
        );
      }

      if (fs.existsSync("src/assets/img/foundations/new.jpg")) {
        let newFileName = `/${data.id}.jpg`;
        fs.rename(
          "orgs-front/src/assets/img/foundations/new.jpg",
          `orgs-front/src/assets/img/foundations${newFileName}`,
          (err) => {
            if (err) console.log(err);
          }
        );
      }
      return {
        error: false,
        data: {
          id: data._id,
          foundationName: data.foundationName,
          internUsers: data.internUsers,
          image: data.image,
          location: data.location,
          description: data.description,
          email: data.email
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
g
  static async addPets(id, body) {
    //console.log("Addpets", body, id)
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
