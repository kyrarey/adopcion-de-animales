const Chat = require("../models/Chat");

class ChatServices {
  static async getChat(params) {
    try {
      const data = await Chat.find({ user: params.userId });
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
}

module.exports = ChatServices;