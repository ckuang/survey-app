const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js');
const Question = require('./question');


var Response = sequelizeConnection.define('response',{
	name: { type: Sequelize.STRING, 
		    validate: { len: [1,300], notEmpty: true }
	}	
})


Response.belongsToMany(Question, {through: 'resp-quest'})
Question.belongsToMany(Response)

module.exports = Response;




