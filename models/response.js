const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Question = require('./question.js');


var Response = sequelizeConnection.define('response', {
  Choice: {
    type: Sequelize.STRING,
  },

  questionId: {
  	type: Sequelize.INTEGER,
  }
});

Response.belongsTo(Question);


module.exports = Response;