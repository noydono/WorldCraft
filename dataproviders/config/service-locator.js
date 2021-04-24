//j'utilise la premier partie de url /user/create pour injecté les dependence adequoite

const constants = require('./constants');
const environment = require('./environment');

module.exports=(req,res,next)=>{

  console.log("**********ServiceLocator****************");
  const urlSplit = req.originalUrl.split("/")
  const service = buildService(urlSplit[1])
  req.body.serviceLocator = service;
  next()

}

function buildService(repositoryName) {
  
  const beans = {},
  url = `../database/repository/${repositoryName.trim()}/${repositoryName.trim()}RepositoryMongo`

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {

    throw new Error('Add in memory support');

  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {

    const RepositoryMongo = require(url);
    beans.Repository = new RepositoryMongo();

  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {

    throw new Error('Add PostgreSQL support');

  } else {

    throw new Error('Add SQLlite support');

  }
  return beans;
}

