var Sequelize = require('sequelize') 
var sequelizeConnection = new Sequelize('postgres://salinafu@localhost:5432/surveyapp');
const Question = require('./question.js')

var Response = sequelizeConnection.define("Response", {
	choice: {
		type: Sequelize.STRING
	}	
})

Response.belongsTo(Question);

module.exports = Question;