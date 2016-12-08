const express = require('express')
const app = express();
const Sequelize = require('sequelize')


var sequelizeConnection = new Sequelize('postgres://Chanice@localhost:5432/surveyapp');

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})

module.exports = sequelizeConnection;