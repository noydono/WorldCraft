const BCategorie = require ("../dbModels/categorieBig");

module.exports = {
  setBigCategorie: (req, res) => {
    console.log("coucou")
    var data = {
      name: req.body.name
    }
    BCategorie.create(data,(err) => {
      (err) ? console.log('erreur Set BigCategorie : **********' + err) : console.log('bigCategorie create')  
    })
  },
  getBigCategorie: async(req,res) => {
    console.log('getBigCategorie')
    var data = await BCategorie.find({})
    console.log(data)
    res.send(data)
  }
};
