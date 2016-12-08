const Sequelize = require("sequelize");
const sequelizeConnection = require("../db")
const Question = require("./question")

const Response = sequelizeConnection.define("response", {
	response: {
		type: Sequelize.STRING,
		// validate: {notEmpty: true}
	}
})

// ASSOCIATION
// Response.belongsTo(Question);

module.exports = Response;