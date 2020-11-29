const BCategorie = require("../dbModels/categorieBig");
const SCategorie = require("../dbModels/categorieSmall");
const Sujet = require("../dbModels/sujet");

module.exports = {
  setBigCategorie: (req, res) => {
    var data = {
      name: req.body.name
    }
    BCategorie.create(data, (err) => {
      if (err) {
        console.log('erreur Set BigCategorie : **********' + err)
      } else {
        console.log('bigCategorie create')
        res.send()
      }
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
      if (err) {
        console.log('erreur Set SmallCategorie : **********' + err)
      } else {
        console.log('smallCategorie create')
        res.send()
      }
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
      if (err) {
        console.log('erreur create setSujet : **********' + err)
      } else {
        console.log('setSujet create')
        res.send()
      }    })
  },
  getSujet: async (req, res) => {

    var id = req.params.id
    console.log("getSujet")
    var data = await Sujet.find({ categorieSmall_id: id });
    res.send(data)

  }
};
