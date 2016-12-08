// THIS IS THE MODEL/ SCHEMA FOR THE QUESTIONS TABLE

// HERE, WE IMPORT SEQUELIZE
const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// HERE, WE CREATE THE MODEL FOR EACH QUESTION
const Question = sequelizeConnection.define('question', {

	// THE BODY OF THE TWEET
    body: {
    	type: Sequelize.STRING,
        validate: {len:[1,100],notEmpty:true}
    },

    choiceOne: {
    	type: Sequelize.STRING,
    },

    choiceTwo: {
    	type: Sequelize.STRING,
    },

    choiceThree: {
    	type: Sequelize.STRING,
    },

    choiceFour: {
    	type: Sequelize.STRING,
    }

});

/*
Questions can have many responses
Responses belong to one question
*/

Question.hasMany(Response);
Response.belongsTo(Question);


// NOW, WE EXPORT IT
module.exports = Question;

































