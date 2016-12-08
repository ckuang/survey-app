const Sequelize = require('sequelize');
const sequelizeConnection = require('../server.js');
const Artist = require('./question');


var Response = sequelizeConnection.define('response',{
	name: { type: Sequelize.STRING, 
		    validate: { len: [1,300], notEmpty: true }
	}	
})


Response.belongsToMany(Artist, {through: 'genre-song'})


module.exports = Response;




