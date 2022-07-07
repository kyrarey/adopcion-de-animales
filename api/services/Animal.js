const Animal = require("../models/Animal");
// const Comment = require("../models/Comments");

class AnimalServices {
  static async getAll(params) {
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
    console.log("entra al get one services")
    try {
      const data = await Animal.findById(id).exec();
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

  static async addOne(body) {
  
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
    try {
      const data = await Animal.findByIdAndUpdate(id, body);
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
