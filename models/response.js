const Sequelize = require('sequelize')
const sequelize = require('../db'); 


const Response = sequelize.define('response', {
	choice: Sequelize.STRING
})


module.exports = Response;