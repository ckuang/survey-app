var sequelize = require('sequelize');
// const sequelizeConnection = require('');

var Response = sequelizeConnection.define('response', {
  choice: {
    type: sequelize.STRING
  },
  QuestionID: {
    Sequelize.INTEGER
  }
})

Response.belongsTo(Question)
Question.belongsToMany(through: 'QuesResponses')
module.exports = Response;
