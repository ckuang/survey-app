const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js');

const Question = sequelizeConnection.define('question', {
  question: {type: Sequelize.STRING},
  choice1: {type: Sequelize.STRING},
  choice2: {type: Sequelize.STRING},
  choice3: {type: Sequelize.STRING},
  choice4: {type: Sequelize.STRING}
  }
);

module.exports = Question;
