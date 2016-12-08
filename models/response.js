var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');
var Question = require("./question");

var Response = sequelizeConnection.define('response',{
	answer: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 400], notEmpty: true
		}
	}

});

// I keep returning errors this.name + '.belongsToMany called with something that\'s not an instance of Sequelize.Model'
 // at null.belongsTo (/Users/nikobellalewis/Desktop/class-exercises/survey-app/node_modules/sequelize/lib/associations/mixin.js:95:13)
Response.belongsTo(Question);
Question.belongsToMany(Response, {through: 'qa'});

module.exports = Response;
