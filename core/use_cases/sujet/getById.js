"use strict";

module.exports = (id,{ Repository }) => {
  return Repository.getById(id);
};