const Sequelize = require('sequelize');
const sequelizeConnection = require('../server.js');
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

Song.belongsTo(Question, {foreignKey: 'Song_id'});
Question.hasMany(Song,{ foreignKey: 'album_id'});

module.exports = Question




