"use strict";

const User = require('../../entities/user');

module.exports = (pseudo, email, password, { Repository }) => {
  const user = new User(null, pseudo, email, password);
  return Repository.create(user);
};