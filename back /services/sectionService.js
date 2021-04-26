"use strict";

const Section = require("../models/sectionModel");

class SectionService {

  async createSection(name, description, categorie_id, icon, avatar) {

    const section = new Section({
      
      name: name,
      description: description,
      categorie_id: categorie_id,
      icon : icon,
      avatar : avatar

    })

    await section.save()

    return section

  }

  async getAll() {

    return await Section.find();

  }

};

module.exports = new SectionService()