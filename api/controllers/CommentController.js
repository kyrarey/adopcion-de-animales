const CommentServices = require("../services/Comment");

class CommentControllers {
  //ver comentarios
  static async getAll(req, res) {
    const { error, data } = await CommentServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //agregar comentario
  static async addOne(req, res) {
    const { error, data } = await CommentServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }
}

module.exports = CommentControllers;
