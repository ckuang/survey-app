const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
//const Response = require('./response.js');

var Question = sequelizeConnection.define('question', {
  Question: {
    type: Sequelize.STRING,
  },

  Choice1: {
    type: Sequelize.STRING,
  },

  Choice2: {
    type: Sequelize.STRING,
  },

  Choice3: {
    type: Sequelize.STRING,
  },

  Choice4: {
    type: Sequelize.STRING,
  }

});


module.exports = Question;