const Sequelize = require('sequelize');
const sequelizeConnection = require('../db.js');
const Question = require ('./question.js');

const Response = sequelizeConnection.define('response', {
  answer: {type: Sequelize.STRING}
});

Response.belongsTo(Question);
Question.belongsToMany(Response, {through: 'Responses'});

module.exports = Response
