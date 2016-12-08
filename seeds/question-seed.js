const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Question = require('../models/question');

//Artist.sync will create the artists table
Question.sync({force: true})
//add the following three Questions to the database:
.then(() => Question.bulkCreate([
  {question: 'Q1'},
  {question: 'Q2'},
  {question: 'Q3'},
]))
//the following Questions should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Question.bulkCreate([
  {question: ''},
  {question: ['QQ', 'QQQ']},
], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
