const getAll = require("../../../core/use_cases/categorie/getAll");
const Create = require("../../../core/use_cases/categorie/create")

module.exports = {

  async create(req, res) {

    console.log("**********CategorieCreateController****************");

    try {

      const {

        name,
        serviceLocator
        
      } = req.body

      const categorie = await Create(name, serviceLocator)

      res.status(200).json(categorie)

    } catch (exception) {

      res.status(422).json(exception)

    }


  },

  async get(req, res) {

    console.log("**********CategorieGetController****************");

    try {
      const categorie = await getAll(req.body.serviceLocator)
      res.status(200).json(categorie)

    } catch (err) {

      res.status(422).json(err)

    }

  }

};