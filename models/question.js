var Sequelize = require('sequelize');
var sequelizeConnection = require('../server');

var Question = sequelizeConnection.define('question', {
  question: {
    type : Sequelize.STRING
  },
  choice1: {
    type: Sequelize.STRING
  },
  choice2: {
    type: Sequelize.STRING
  },
  choice3: {
    type: Sequelize.STRING
  },
  choice4: {
    type: Sequelize.STRING
  }
})

module.exports = Question;
