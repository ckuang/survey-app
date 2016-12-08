const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Question = require("./question");

var Response = sequelizeConnection.define('response', {
  response: {
    type: Sequelize.STRING
  }
  // ,
  // questionId: {

  // }
});

//Response.belongsTo(Question); //not working
//hasOne?

module.exports = Response;

// Defining the correct schema for the Response model

// QuestionID: integer (created through the association)