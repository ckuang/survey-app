var Sequelize = require('sequelize')
var Question = require('./question')
var sequelizeConnection = require('../sequelizeConnection')



var Response = sequelizeConnection.define('response',{
	Choice: Sequelize.STRING(500),
	
})


Response.sync()



module.exports = Response