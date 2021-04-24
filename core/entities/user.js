"use strict";


module.exports = class User {

    constructor(id = null , pseudo, email , password, token =null, isAdmin = false) {
      this.id = id
      this.pseudo = pseudo;
      this.email = email;
      this.password = password;
      this.token = token;
      this.isAdmin = isAdmin
  
    }
  
  };