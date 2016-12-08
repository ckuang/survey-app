var Sequelize = require('sequelize');
var sequelizeConnection = require('../db.js');
var Question = require('./question')

var Response = sequelizeConnection.define('response',{
    choice: {type:Sequelize.STRING}
})


Response.belongsTo(Question);
Question.belongsToMany(Response)

module.exports = Response;