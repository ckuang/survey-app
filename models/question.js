var Sequelize = require('sequelize');
var sequelizeConnection = require('../server');
var Response = require('./response')

const Question = sequelizeConnection.define('question', {
    Question: {
      type: Sequelize.STRING
    },
    ChoiceOne: {
      type: Sequelize.STRING
    },
    ChoiceTwo: {
      type: Sequelize.STRING
    },
    ChoiceThree: {
      type: Sequelize.STRING
    },
    ChoiceFour: {
      type: Sequelize.STRING
    }
});

Question.belongsToMany(Responses);
Responses.hasOne(Question);

module.exports= Question;
