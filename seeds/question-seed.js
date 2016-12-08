var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');
var Question = require("../models/question");

//syncing with questions table
Question.sync({force: true})
//addinf 3 test questions to database:
.then(() => Question.bulkCreate([
  {question: 'Is sequelize working?',
	 choice1: 'No, go read documentation.',
     choice2: "No, go debug your code line by line.",
     choice3: 'Maybe... wait no. Start over.',
     choice4: 'Sequelize has betrayed you.'},

]))
.catch((err) => console.log(err));