const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js');

const Response = require('./response.js')

var Question = sequelizeConnection.define('question', {
	question:Sequelize.STRING,
	choiceOne:Sequelize.STRING,
	choiceTwo:Sequelize.STRING,
	choiceThree:Sequelize.STRING,
	choiceFour:Sequelize.STRING
})


Question.hasMany(Response, {as:'Survey'})
Response.belongsTo(Question)

module.exports = Question;