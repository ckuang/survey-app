var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');
var Question = require("./question");

var Response = sequelizeConnection.define('response',{
	answer: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 400], notEmpty: true
		}
	},
	questionId: {
   		type: Sequelize.INTEGER,
    }

});

Response.belongsTo(Question);
Question.belongsToMany(Response, {through: 'questionresponse'});
module.exports = Response;
