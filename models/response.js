// THIS IS THE MODEL/ SCHEMA FOR THE RESPONSE TABLE

// HERE, WE IMPORT SEQUELIZE
const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// HERE, WE CREATE THE MODEL FOR EACH QUESTION
const Response = sequelizeConnection.define('response', {

	// THE BODY OF THE RESPONSE/ CHOICE
    choice: {type: Sequelize.STRING},
    
    questionID: {
    	type: Sequelize.INTEGER,
    	{where: {id: req.params.questionId} // (EACH QUESITON WITH IT'S CORRESPONDING ID IS IN THE 'seed.js' FILE)
    }

});

Question.hasMany(Response);
Response.belongsTo(Question);

// NOW, WE EXPORT IT
module.exports = Response;