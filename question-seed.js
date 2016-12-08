const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Question = require('./models/question.js');

Question.sync({force: true})
.then(() => sequelizeConnection.sync())
.then((data) => Question.create(
  { question: 'Was this easy?',
    choice1: 'heck no',
    choice2: 'contemplating becoming a cleaner instead',
    choice3: 'this was easy',
    choice4: 'potato'}))
.catch((err) => console.log(err));
