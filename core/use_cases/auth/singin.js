"use strict";

const User = require('../../entities/user');

module.exports = (email, password, { Repository }) => {

    const user = new User(null, null, email, password);
    return Repository.findByCredential(user);
  
};