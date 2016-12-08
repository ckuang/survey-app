var Sequelize = require('sequelize');
var sequelizeConnection = require('../db.js');
var Response = require('./response');

var Question = sequelizeConnection.define('question',{
    question: {
        type:Sequelize.STRING
            },
    choice1 : {
        type:Sequelize.STRING
            },
    choice2: {
        type:Sequelize.STRING
            },
    choice3: {
        type:Sequelize.STRING
            },
    choice4: {
        type:Sequelize.STRING
            }
});



module.exports= Question;