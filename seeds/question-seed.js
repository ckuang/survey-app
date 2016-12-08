const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Question = require('../models/question');

//Artist.sync will create the artists table
Question.sync({force: true})
//add the following three Questions to the database:
.then(() => Question.bulkCreate([
  {question: 'Q1', choice1: "1", choice2: "2", choice3: "3", choice4: "4"},
  {question: 'Q2', choice1: "4", choice2: "3", choice3: "2", choice4: "1"},
  {question: 'Q3', choice1: "a", choice2: "b", choice3: "c", choice4: "d"},
]))
//the following Questions should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Question.bulkCreate([
  {question: ''},
  {question: ['QQ', 'QQQ']},
], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
