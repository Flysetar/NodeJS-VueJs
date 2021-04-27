const Sequelize = require("sequelize");

const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "noteappdb",
  dialect: "mysql",
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const dbConnection = {};

dbConnection.sequelize = sequelize;
dbConnection.users = require("../models/user")(sequelize, Sequelize);

module.exports = dbConnection;
