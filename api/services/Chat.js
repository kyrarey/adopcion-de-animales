const Chat = require("../models/Chat");

class ChatServices {
  static async getChat(params) {
    try {
      const data = await Chat.find({ foundation: params.foundationId });
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

  static async addOne(body) {
    try {
      const data = await Chat.create(body);
      return {
        error: false,
        data:data,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
  }

  static async updateOne(id, body) {
    console.log(body, "body en services", id);
    try {
      const data = await Chat.updateOne(
        { foundation: body.foundation,
        user:body.user},
        { $push: { content: body.content }}
        );
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


}

module.exports = ChatServices;