var Sequelize = require('sequelize')

var sequelizeConnection = new Sequelize('postgres://Carlos@localhost:5432/surveyapp');


module.exports = sequelizeConnection;
