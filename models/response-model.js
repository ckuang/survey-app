const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js'); 


const Response = sequelizeConnection.define('response', {
	choice :{
		type: Sequelize.STRING,
		allowNull:false
	}, 
	questionID : {
		type: Sequelize.INTEGER,
		allowNull:true
	}
})

module.exports = Response; 

