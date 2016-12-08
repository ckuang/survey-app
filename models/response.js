const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js');

var Response = sequelizeConnection.define('response', {
	choice:Sequelize.STRING
})



module.exports = Response;