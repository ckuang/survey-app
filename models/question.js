var Sequelize = require('sequelize')
var sequelizeConnection = require('../db.js')

var Question = sequelize.define('question', {
  title: {
    question: Sequelize.STRING,
    choice1: Sequelize.STRING,
    choice2: Sequelize.STRING,
    choice3: Sequelize.STRING,
    choice4: Sequelize.STRING
  }
})

module.exports = Question;
