var Sequelize = require('sequelize');
var sequelizeConnection = require('../db');
var Question = require('./question');






const Response= sequelizeConnection.define('response',{
	 title: {
  	type: Sequelize.STRING(250)
  	},
  });

// Question.belongsToMany(Response,{through: 'question_response'});
Response.belongsTo(Question)
Question.belongsTo(response);
// Question.belongsToMany(through: 'QuesResponses')

 
module.exports = Response;
