const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Response = require('./models/response.js');
const Question = require('./models/question.js')

Response.sync({force: true})
.then(() => sequelizeConnection.sync())
.then((data) => Response.create(
  {answer: 'contemplating becoming a cleaner instead' }
))
.then((answer) => {
  answer.addQuestion([1])
})
.catch((err) => console.log(err));
