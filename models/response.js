var Sequelize = require('sequelize')
var Question = require('./question')
var sequelizeConnection = require('../sequelizeConnection')



var Response = sequelizeConnection.define('response',{
	ChoiceOne: Sequelize.STRING(500),
	ChoiceTwo: Sequelize.STRING(500),
	ChoiceThree: Sequelize.STRING(500),
	ChoiceFour: Sequelize.STRING(500)
})


Response.sync()



module.exports = Response