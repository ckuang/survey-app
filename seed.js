// IMPORT EVERYTHING
const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// QUESTION/ RESPONSE
const Question = require('../models/question');
const Response = require('../models/response');


// THIS WILL CREATE A QUESTION TABLE
Question.sync({force: true})
.then(() => sequelizeConnection.sync())

// THIS WILL CREATE A RESPONSE TABLE
Response.sync({force: true})
.then(() => sequelizeConnection.sync())


// -------------------------------------------------------------------------+
// ----------- ADDS THE FOLLOWING FOUR QUESTIONS TO THE DATABASE -----------+
// -------------------------------------------------------------------------+

// (NOTE: THERE IS A SEPARATE RESPONSE-SEED FILE FOR ALL THE RESPONSES, THANK YOU)

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Question.create(
  {question: 'What is the best Coding BootCamp?', questionId: 1}
))
.then((quest) => {
  quest.addQuestion()
})

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Question.create(
  {question: 'Who is the founder of C4Q?', questionId: 2}
))
.then((quest) => {
  quest.addQuestion()
})

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Question.create(
  {question: 'What is the best Programming language?', questionId: 3}
))
.then((quest) => {
  quest.addQuestion()
})

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Question.create(
  {question: 'Are you a Front-end or Back-end Developer?', questionId: 4}
))
.then((quest) => {
  quest.addQuestion()
})

// IF EVERYTHING RUNS CORRECT, THERE SHOULD ONLY BE FOUR QUESTIONS IN THE DATABASE
.catch((err) => console.log(err));




