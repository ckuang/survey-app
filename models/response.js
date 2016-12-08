const Sequelize = require("sequelize");
const sequelizeConnection = require("../db")
const Question = require("./question")

const Response = sequelizeConnection.define("response", {
	choice: {
		type: Sequelize.STRING,
		validate: {notEmpty: true}
	}
})

// ASSOCIATIONS
Question.hasMany(Response)
Response.belongsTo(Question); // adds questionId to Response

module.exports = Response;