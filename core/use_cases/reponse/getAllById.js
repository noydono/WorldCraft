"use strict";

module.exports = (id,{ Repository }) => {
  return Repository.getAllById(id);
};