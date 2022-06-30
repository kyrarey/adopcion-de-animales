const CommentServices = require("../services/Comment");

class CommentControllers {
  //ver comentarios
  static async getComments(req, res) {
    const { error, data } = await CommentServices.getComments(req.params.id);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  //agregar comentario
  static async addOne(req, res) {
    const { error, data } = await CommentServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  //editar comment
  static async updateOne(req, res) {
    console.log(req.body,"req body", req.params.id,   "controller")
    const { error, data } = await CommentServices.updateOne(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  //borrar un comment
  static async deleteOne(req, res) {
    const { error, data } = await CommentServices.deleteOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }
}

module.exports = CommentControllers;
