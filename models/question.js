const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
// const SequelizeConnection = require('../server.js');
// const Response = require('./response')

//model definition should have name
var Question = sequelizeConnection.define('question', {
  question: {type: Sequelize.STRING},
  choiceOne: {type: Sequelize.STRING},
  choiceTwo: {type: Sequelize.STRING},
  choiceThree: {type: Sequelize.STRING},
  choiceFour: {type: Sequelize.STRING}
})


module.exports = Question;


