var Sequelize = require('sequelize');
var sequelizeConnection = require('../server.js');
var Response = require('./response');

var Question = sequelizeConnection.define('question', {
  question:Sequelize.STRING,
  one:Sequelize.STRING,
  two:Sequelize.STRING,
  three:Sequelize.STRING,
  four:Sequelize.STRING
})

Response.belongsTo(Question);
Question.belongsToMany(Response, {through: 'question_response'})

Question.sync({force: true}).then(function () {
  // Table created
  return Question.create();
});

module.exports = Question;