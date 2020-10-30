const BCategorie = require ("../dbModels/categorieBig");
const SCategorie = require ("../dbModels/categorieSmall");

module.exports = {
  setBigCategorie: (req, res) => {
    var data = {
      name: req.body.name
    }
    BCategorie.create(data,(err) => {
      (err) ? console.log('erreur Set BigCategorie : **********' + err) : console.log('bigCategorie create')  
    })
  },
  getBigCategorie: async(req,res) => {
    var data = await BCategorie.find({})
    res.send(data)
  },
  setSmallCategorie: (req, res) => {
    var data = {
      ...req.body
    }

    SCategorie.create(data,(err) => {
      (err) ? console.log('erreur Set SmallCategorie : **********' + err) : console.log('smallCategorie create')  
    })
  },
  getSmallCategorie: async(req,res) => {
    var data = await SCategorie.find({})
    res.send(data)
  },
};
