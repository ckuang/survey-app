var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');
var Response = require("../models/response");

//syncing with Responses table
Response.sync({force: true})
//adding in 4 test responses to be use for each question in database:
.then(() => Response.bulkCreate([
  {answer: 'No, go read documentation.'},
  {answer: "No, go debug your code line by line."},
  {answer: 'Maybe... wait no. Start over.'},
]))
.catch((err) => console.log(err));