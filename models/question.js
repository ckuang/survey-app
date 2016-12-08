const Sequelize =  require('sequelize');
const sequelizeConnection  = require('../db');
const  Response = require ('./response.js');


var Question = sequelizeConnection.define('question', {
	question1 : {type: Sequelize.STRING},
	ans1: {type: Sequelize.STRING},
    ans2: {type: Sequelize.STRING},
    ans3: {type: Sequelize.STRING},
    ans4: {type: Sequelize.STRING}

})

 Question.belongsToMany(Response, {through: 'QuestionResponse'});
 Response.belongsTo(Question);

module.exports = Question;