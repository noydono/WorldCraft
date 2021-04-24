"use strict";


module.exports = class Sujet {

    constructor(id = null , title, content , author, tag, section_id , created_at = null) {
      this.id = id
      this.title = title;
      this.content = content;
      this.author = author;
      this.tag = tag;
      this.section_id = section_id;
      this.created_at = created_at;
    }
  
  };