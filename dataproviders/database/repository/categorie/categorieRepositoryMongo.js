const Categorie = require("../../../../core/entities/categorie");
const categorieEntitie = require("../../../../core/entities/categorie"),
  categorieInterface = require("../../../../core/port/categorieInterface"),
  CategorieModel = require("../../odm/mongoose/schema/categorieModel");

module.exports = class extends categorieInterface {

  constructor() {
    super();
  }

  async create(categorie) {
   
      const mongooseCategorie = new CategorieModel({
        name: categorie.name
      })

      await mongooseCategorie.save()

      return mongooseCategorie
    
  }

  async getAll() {
     
    const mongooseCategorie = await CategorieModel.find();

    return mongooseCategorie.map((mongooseCategorie) => {
      return new Categorie(mongooseCategorie.id, mongooseCategorie.name);
    });
    
  }

};