const BCategorie = require("../dbModels/categorieBig");
const SCategorie = require("../dbModels/categorieSmall");
const Sujet = require("../dbModels/sujet");

module.exports = {
  setBigCategorie: (req, res) => {
    var data = {
      name: req.body.name
    }
    BCategorie.create(data, (err) => {
      (err) ? console.log('erreur Set BigCategorie : **********' + err) : console.log('bigCategorie create')
    })
  },
  getBigCategorie: async (req, res) => {
    var data = await BCategorie.find({})
    res.send(data)
  },
  setSmallCategorie: (req, res) => {
    var data = {
      ...req.body
    }

    SCategorie.create(data, (err) => {
      (err) ? console.log('erreur Set SmallCategorie : **********' + err) : console.log('smallCategorie create')
    })
  },
  getSmallCategorie: async (req, res) => {
    var data = await SCategorie.find({})
    res.send(data)
  },
  setSujet: (req, res) => {
    var data = {
      ...req.body
    }

    Sujet.create(data, (err) => {
      (err) ? console.log('erreur Set Sujet : **********' + err) : console.log('sujet create')
    })
  },
  getSujet: async (req, res) => {

    var id = req.params.id
    console.log("getSujet" )
    var data = await Sujet.find({ categorieSmall_id: id });
    res.send(data)

  }
};
