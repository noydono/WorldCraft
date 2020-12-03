const Categorie = require("../dbModels/categorieModel.js");


module.exports = {

  setCategorie: (req, res) => {

    var data = {
      name: req.body.name
    }

    Categorie.create(data, (err) => {
      if (err) {
        console.log('erreur SetCategorie : **********' + err)
      } else {
        console.log('SetCategorie create success')
        res.send()
      }
    })
  },

  getCategorie: async (req, res) => {
    var data = await Categorie.find({})
    res.send(data)
  }

};
