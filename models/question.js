const Sequelize = require('sequelize')
const sequelize = require('../db'); 
const Response = require('./response');

const Question = sequelize.define('question', {
	question: Sequelize.STRING,
	choiceOne: Sequelize.STRING,
	choiceTwo: Sequelize.STRING,
	choiceThree: Sequelize.STRING,
	choiceFour: Sequelize.STRING,		
})


Response.belongsTo(Question);
Question.hasMany(Response);

module.exports = Question;