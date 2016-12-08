var Sequelize = require('sequelize') 
var sequelizeConnection = new Sequelize('postgres://salinafu@localhost:5432/surveyapp');

var Question = sequelizeConnection.define("Question", {
	question: {
		type: Sequelize.STRING
	},
	choice1: {
		type: Sequelize.STRING
	},
	choice2: {
		type: Sequelize.STRING
	},
	choice3: {
		type: Sequelize.STRING
	},
	choice4: {
		type: Sequelize.STRING
	}
})

module.exports = Question;