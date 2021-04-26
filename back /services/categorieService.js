"use strict";

const Categorie = require("../models/categorieModel");

class CategorieService {

  async createCategorie(name) {
    
      const categorie = new Categorie({
        name: name
      })

      await categorie.save()

      return categorie
    
  }

  async getAll() {
     
    return await Categorie.find();
    
  }

};

module.exports= new CategorieService()

