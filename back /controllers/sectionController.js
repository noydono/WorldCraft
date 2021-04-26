const GetAll = require("../use_cases/section/getAll");
const CreateSection = require("../use_cases/section/create");

module.exports = {

  create(req, res) {

       const {
        name,
        description,
        categorie_id,
        icon,
        avatar
      } = req.body

      CreateSection.createSection(
        name,
        description,
        categorie_id,
        icon,
        avatar,
        res
      )

      


  },

  get(req, res) {

      GetAll.getAll(res)

  }

};