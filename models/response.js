var Sequelize = require('sequelize');
var sequelizeConnection = require('../server');


const Response = sequelizeConnection.define('response', {
    Choice: {
      type: Sequelize.STRING
      },
      where: {
        QuestionID: question.id
      }
    });

module.exports= Response;
