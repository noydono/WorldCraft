"use strict";


module.exports = class Section {

    constructor(id = null, name, description, categorie_id, icon, avatar) {
      this.id = id
      this.name = name;
      this.description = description;
      this.categorie_id = categorie_id;
      this.icon = icon;
      this.avatar = avatar;
    }

    
  
  };