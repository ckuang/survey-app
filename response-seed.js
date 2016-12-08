const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Response = require('./models/response');
var Question = require('./models/question')



Response.sync({force: true})
