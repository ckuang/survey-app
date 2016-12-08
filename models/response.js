const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Question = require('./question')

 
var Response = sequelizeConnection.define('response', {
  choice: {type: Sequelize.STRING}
  // questionId: {type: Sequelize.INTEGER}
})

Response.belongsTo(Question);
Question.hasMany(Response);


module.exports = Response;

