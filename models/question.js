const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js');
var Response = require('./response')

var Question = sequelizeConnection.define('question',{
	question: { type: Sequelize.STRING , 
		    validate: { len: [1,300], notEmpty: true }
	},
	Choice1: { type: Sequelize.STRING},
	Choice2: { type: Sequelize.STRING},
	Choice3: { type: Sequelize.STRING},
	Choice4: { type: Sequelize.STRING},

})



module.exports = Question




