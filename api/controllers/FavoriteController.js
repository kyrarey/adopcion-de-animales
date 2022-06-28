const FavoriteServices = require("../services/Favorite");

class FavoriteControllers {
  static async getAll(req, res) {
    const { error, data } = await FavoriteServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async addOne(req, res) {
    const { error, data } = await FavoriteServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  static async deleteOne(req, res) {
    const { error, data } = await FavoriteServices.deleteOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }
}

module.exports = FavoriteControllers;
