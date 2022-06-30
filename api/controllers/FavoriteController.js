const FavoriteServices = require("../services/Favorite");

class FavoriteControllers {
  static async getById(req, res) {
    console.log("entre al controller");
    console.log("req.params :", req.params);
    const { error, data } = await FavoriteServices.getById(req.params);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async addOne(req, res) {
    const { error, data } = await FavoriteServices.addOne(req.body);
    console.log(req.body);
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
