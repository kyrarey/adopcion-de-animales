const Animal = require("../models/Animal");
const fs = require("fs");
// const Comment = require("../models/Comments");

class AnimalServices {
  static async getAll(params) {
    //console.log("PARAMS", params)
    try {
      const data = await Animal.find(params).exec();
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

  static async getOne(id) {

    try {
      const data = await Animal.findById(id);
      //console.log(data, "Dateishion");
      return {
        error: false,
        data: {
        age: data.age,
        animalname: data.animalname,
        fundationId: data.fundationId,
        history: data.history,
        location: data.location,
        personality: data.personality,
        sex: data.sex,
        size: data.size,
        species: data.species,
        vaccines: data.vaccines,
        image:(fs.existsSync(`src/assets/img/pets${data.image[0]}`) ? data.image : ["/no_pet.jpg"])
      },
      };
    } catch (error) {
      console.error(error, "    error");
      return {
        error: true,
        data: "error 404: Animal not found",
      };
    }
  }

  static async addOne(body) {
    //console.log(body, "body del addone")
    try {
      const data = await Animal.create(body);
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
  }
  static async updateOne(id, body) {
    //console.log(body, "body en services", id);
    try {
      const data = await Animal.updateOne(
        { _id: id },
        { $push: { image: body.image } ,
          $set :{animalname : body.animalname,
            location : body.location,
            size : body.size,
            species : body.species,
            sex : body.sex,
            age : body.age,
            history : body.history,
            vaccines : body.vaccines,
            personality : body.personality
          }
      }
        );
        if (fs.existsSync("orgs-front/src/assets/img/pets/01.jpg")) {
          //console.log(data,"Data")
          let newImage = `${body.image}`;
          fs.rename(
            "orgs-front/src/assets/img/pets/01.jpg",
            `orgs-front/src/assets/img/pets${newImage}`,
            (err) => {
              if (err) console.log(err);
            }
          );
        }
        if (fs.existsSync("src/assets/img/pets/01.jpg")) {
          //console.log(data,"Data")
          // let count = body.image.length;
          let newImage = `${body.image}`;
          fs.rename(
            "src/assets/img/pets/01.jpg",
            `src/assets/img/pets${newImage}`,
            (err) => {
              if (err) console.log(err);
            }
          );
        }
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: Animal not found, changes couldn't be made",
      };
    }
  }
  static async deleteOne(id) {
    try {
      const result = await Animal.findByIdAndDelete(id);
      return {
        error: false,
        data: "Animal deleted successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error: couldn't delete Animal, it doesn't exist.",
      };
    }
  }

  //   static async getReviews(produAnimalctId) {
  //     try {
  //       const data = await Comment.find({ productId: productId }).exec();
  //       return {
  //         error: false,
  //         data: data,
  //       };
  //     } catch (error) {
  //       return {
  //         error: true,
  //         data: "error 404: page not found",
  //       };
  //     }
  //   }

  //   static async addReviews(body) {
  //     try {
  //       await Comment.create(body);
  //       return {
  //         error: false,
  //         data: body,
  //       };
  //     } catch (error) {
  //       console.log(error);
  //       return {
  //         error: true,
  //         data: error,
  //       };
  //     }
  //   }

  //search by title
  //   static async searchByTitle(title) {
  //     try {
  //       const response = await Animal.find(
  //         {
  //         title: { $regex: title,
  //         },
  //       }
  //       );
  //       return {
  //         error: false,
  //         response,
  //       };
  //     } catch (error) {
  //       return {
  //         error: true,
  //         response: error,
  //       };
  //     }
  //   }
}

module.exports = AnimalServices;
