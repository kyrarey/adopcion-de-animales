const Comment = require("../models/Comment");

class CommentServices {
  //ver los comentarios
  static async getAll(params) {
    try {
      const data = await Comment.find(params).exec();
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

  //agregar comentario
  static async addOne(body) {
    try {
      await Comment.create(body);
      return {
        error: false,
        data: body,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        data: error,
      };
    }
  }
}

module.exports = CommentServices;
