var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://Deeknows@localhost:5432/surveyapp');


//imports response model for use in building association
var Response = require('./response');

const Question = sequelizeConnection.define("question", {
  question: Sequelize.STRING,
  choiceOne: Sequelize.STRING,
  choiceTwo: Sequelize.STRING,
  choiceThree: Sequelize.STRING,
  choiceFour: Sequelize.STRING
})

// Question.belongsToMany(Response, {through: 'Question_Response'})
//creates a responseId in the question table


module.exports = Question;
