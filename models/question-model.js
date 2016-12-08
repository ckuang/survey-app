const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js'); 
const Response = require('../models/response-model.js');



const Question = sequelizeConnection.define('question', {
	question:{
		type:Sequelize.STRING,
		allowNull:true
	},
	choiceOne :{
		type: Sequelize.STRING,
		allowNull:true
	}, 
	choiceTwo : {
		type: Sequelize.STRING,
		allowNull:true
	}, 
	choiceThree: {
		type: Sequelize.STRING,
		allowNull:true
	},
	choiceFour: {
		type: Sequelize.STRING,
		allowNull:true
	}
})


Response.belongsTo(Question);
Question.belongsToMany(Response, {through: 'questionID'});

module.exports = Question; 