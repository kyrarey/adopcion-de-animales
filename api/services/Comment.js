const Comment = require("../models/Comment");

class CommentServices {
  //ver los comentarios
  static async getComments(params) {
    try {
      const data = await Comment.find({ foundationId: params }).exec();

      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: error,
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

  //editar comment
  static async updateOne(id, body) {
    console.log(id, body, "   id y body");
    try {
      await Comment.findByIdAndUpdate(id, body);
      return {
        error: false,
        data: "Comment updated successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: error,
      };
    }
  }

  //borrar un comment
  static async deleteOne(id) {
    try {
      const result = await Comment.findByIdAndDelete(id);
      return {
        error: false,
        data: "Comment deleted successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: error,
      };
    }
  }
}

module.exports = CommentServices;
