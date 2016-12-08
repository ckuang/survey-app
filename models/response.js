var Sequelize = require('sequelize');
var sequelizeConnection = require('../db');

var Question = require('./question')

var Response = sequelizeConnection.define('response', {
  choice: {
    type: Sequelize.STRING
  },
  questionId: {
    type: Sequelize.INTEGER
  }
})

Response.belongsTo(Question);
Question.belongsToMany(Response, {through: 'QuesResponses'});

module.exports = Response;
