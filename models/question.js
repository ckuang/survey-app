var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://Deeknows@localhost:5432/surveyapp');


//imports response model for use in building association
var Response = require('./response');

const Question = sequelizeConnection.define("question", {
  question: Sequelize.STRING,
  firstChoice: Sequelize.STRING,
  secondChoice: Sequelize.STRING,
  thirdChoice: Sequelize.STRING,
  fourthChoice: Sequelize.STRING
})

Question.sync({force: false})

//creates a responseId in the question table
// Question.belongsToMany(Response, {through: 'Question_Response'})


module.exports = Question;
