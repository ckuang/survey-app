const Sequelize = require("sequelize");
const sequelizeConnection = require("../db")
// BEWARE CIRCULAR REQUIRING
// const Response = require("./response")

const Question = sequelizeConnection.define("question", {
	question: {
		type: Sequelize.STRING,
		validate: {notEmpty: true}
	},
	choice1: {
		type: Sequelize.STRING,
		validate: {notEmpty: true}
	},
	choice2: {
		type: Sequelize.STRING,
		validate: {notEmpty: true}
	},
	choice3: {
		type: Sequelize.STRING,
		validate: {notEmpty: true}
	},
	choice4: {
		type: Sequelize.STRING,
		validate: {notEmpty: true}
	},


})




module.exports = Question;