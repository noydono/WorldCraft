const Categorie = require("../dbModels/categorie.js");

module.exports = {
  create: (req, res) => {
    
    
    Categorie.create({
      name: req.body.name,
      description: req.body.description,
      categorie: req.body.categorie, //array contenent au que mod il apartai java worldedit ...
      tag: req.body.tag,
    });

    res.send("coucou");
  },
};
