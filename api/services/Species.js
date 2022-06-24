const Species = require("../models/Species");


class SpecieServices {
  static async getAll() {
    try {
      const species = await Species.find();
      return { error: false, data: species };
    } catch (error) {
      return { error: true, data: "Especie no encontradas" };
    }
  }

  static async removeSpecies(id) {
    try {
      await Species.findByIdAndRemove(id);
      return { error: false, data: "Especie eliminada con exito" };
    } catch (error) {
      return { error: true, data: "Surgio un error al eliminar la Especie" };
    }
  }

  static async createSpecies(body) {
    try {
      await Species.create(body);

      let result = await Species.find(body)
      return { error: false, data: result };

    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

  static async getUpdate(id, body) {
    try {
      await Species.findByIdAndUpdate(id, body);
      return { error: false, data: `Especie actualizada` };
    } catch (error) {
      console.log(error);
      return { error: true, data: "No se logro introducir los cambios" };
    }
  }
}

module.exports = SpecieServices;