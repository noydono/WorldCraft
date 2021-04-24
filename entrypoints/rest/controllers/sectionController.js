const getAll = require("../../../core/use_cases/section/getAll");
const Create = require("../../../core/use_cases/section/create")

module.exports = {

  async create(req, res) {

    console.log("**********SectionCreateController****************");
    try {

      const {
        name,
        description,
        categorie_id,
        icon,
        avatar,
        serviceLocator
      } = req.body

      const section = await Create(
        name,
        description,
        categorie_id,
        icon,
        avatar,
        serviceLocator
      )

      res.status(200).json(section);

    } catch (exception) {

      res.status(422).json(exception)

    }


  },

  async get(req, res) {

    console.log("**********SectionGetController****************");

    try {

      const section = await getAll(req.body.serviceLocator)
      res.status(200).json(section)

    } catch (exception) {

      res.status(422).json(exception)

    }

  }

};