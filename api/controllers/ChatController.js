const ChatServices = require("../services/Chat");

class ChatControllers {
  static async getChat(req, res) {

    const { error, data } = await ChatServices.getChat(req.params);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async addOne(req, res) {
    const { error, data } = await ChatServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

}

module.exports = ChatControllers;