const AnimalServices = require("../services/Animal");

class AnimalControllers {
  static async getAll(req, res) {
    const { error, data } = await AnimalServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getAllBySpecie(req, res) {
    const { error, data } = await AnimalServices.getAll({
      species: req.params.species,
    });

    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getAllByName(req, res) {
    const { error, data } = await AnimalServices.getAll({
      animalname: req.params.name,
    });
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getOne(req, res) {
    const { error, data } = await AnimalServices.getOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async addOne(req, res) {
    const { error, data } = await AnimalServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  static async updateOne(req, res) {
    console.log(req.body, "body")
    const { error, data } = await AnimalServices.updateOne(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async deleteOne(req, res) {
    const { error, data } = await AnimalServices.deleteOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

//   static async getReviews(req, res) {
//     const { error, data } = await AnimalServices.getReviews(req.params.id);
//     if (error) {
//       return res.status(500).send({ message: data.message });
//     }
//     res.status(201).send(data);
//   }

//   static async addReviews(req, res) {
//     const { error, data } = await AnimalServices.addReviews(req.body);

//     if (error) {
//       return res.status(500).send({ message: data.message });
//     }
//     res.status(201).send(data);
//   }


  //search by title
//   static async searchByTitle(req, res) {
//     const { title } = req.params;

//     const { error, response } = await AnimalServices.searchByTitle(title);

//     if (error) {
//       return res.status(404).send(response);
//     }
//     res.status(200).send(response);
//   }

}

module.exports = AnimalControllers;
