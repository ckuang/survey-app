var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');
var Question = require("../models/question");

//syncing with questions table
Question.sync({force: true})
//addinf 3 test questions to database:
.then(() => Question.bulkCreate([
  {question: 'Is sequelize working?'},
  {question: "Why isn't sequelize working?"},
  {question: 'Oh God, what have I done?'},
]))
.catch((err) => console.log(err));