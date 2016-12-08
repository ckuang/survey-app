const Sequelize = require('sequelize');
const sequelizeConnection = require('./server.js');
const Question = require('./models/question');
const Response = require('./models/response')


// Create the tables:
Question.sync()
Response.sync()
