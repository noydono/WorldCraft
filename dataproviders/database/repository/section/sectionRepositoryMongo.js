const sectionEntitie = require("../../../../core/entities/section"),
  sectionInterface = require("../../../../core/port/sectionInterface"),
  SectionModel = require("../../odm/mongoose/schema/sectionModel");

module.exports = class extends sectionInterface {

  constructor() {
    super();
  }

  async create(section) {

    const mongooseSection = new SectionModel({
      
      name: section.name,
      description: section.description,
      categorie_id: section.categorie_id,
      icon : section.icon,
      avatar : section.avatar

    })

    await mongooseSection.save()

    return mongooseSection

  }

  async getAll() {

    const mongooseSection = await SectionModel.find();

    return mongooseSection.map((item) => {

      return new sectionEntitie(
        item.id, 
        item.name, 
        item.description, 
        item.categorie_id,
        item.icon,
        item.avatar,
        );

    });

  }

};