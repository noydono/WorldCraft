"use strict";


module.exports = class Reponse {

    constructor(id = null , content, sujet_id , author, created_at = null) {
        this.id = id
        this.content = content;
        this.sujet_id = sujet_id;
        this.author = author;
        this.created_at = created_at;
    }
  
  };