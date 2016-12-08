const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Question = require('./models/question');
const Response = require('./models/response');


Question.sync({force: true})
