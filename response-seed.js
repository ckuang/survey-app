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
// ------------ ADDS THE FOLLOWING FOUR ANSWERS TO THE DATABASE ------------+
// -------------------------------------------------------------------------+


// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Response.create(
  {response: 'Coalition For Queens'}
))
.then((ans) => {
  ans.addAnswers()
})

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Response.create(
  {response: 'Jukay and David'}
))
.then((ans) => {
  ans.addAnswers()
})

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Response.create(
  {response: 'JavaScript'}
))
.then((ans) => {
  ans.addAnswers()
})

// --------------------------------------------------------------------------------------------------------

// ADDS THE FOLLOWING QUESTION TO THE DATABASE:
.then((data) => Response.create(
  {response: 'I am a Front-end Developer'}
))
.then((ans) => {
  ans.addAnswers()
})

// IF EVERYTHING RUNS CORRECT, THERE SHOULD ONLY BE FOUR QUESTIONS IN THE DATABASE
.catch((err) => console.log(err));




