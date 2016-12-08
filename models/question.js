const Sequelize = require("sequelize");
const sequelizeConnection = require("../db")
const Response = require("./response")

const Question = sequelizeConnection.define("question", {
	question: {
		type: Sequelize.STRING,
		// validate: {notEmpty: true}
	}
})

// ASSOCIATION
// Question.hasMany(Response)

module.exports = Question;