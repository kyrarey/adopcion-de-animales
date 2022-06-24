const SpecieServices = require('../services/Species')

class SpeciesController {
  static async getAll(req, res) {
    const { error, data } = await SpecieServices.getAll();
    if (error) {
      return res.status(401).send(data);
    }
    res.status(200).send(data);
  }

  static async removeSpecies(req, res) {
    const { error, data } = await SpecieServices.removeSpecies(req.params.id);
    if (error) {
      return res.status(400).send(data);
    }
    return res.status(202).send(data);
  }

  static async createSpecies(req, res) {
    const { error, data } = await SpecieServices.createSpecies(req.body);
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async getUpdate(req, res) {
    const { error, data } = await SpecieServices.getUpdate(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }
}

module.exports = SpeciesController;