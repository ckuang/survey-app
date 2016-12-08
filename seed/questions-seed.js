const Sequelize = require('sequelize'); // Importing sequelize database 
const sequelizeConnection = require('../db.js'); // Connecting it to the server that is running on 3000
const Question = require('../models/question-model.js'); // Importing the question-model 

Question.sync({force:true})
	.then(()=> Question.bulkCreate([
			{question: 'Do you sleep with your closet door opened or closed?'},
			{question: 'Do you still watch cartoons?'},
			{question: 'Cheetos or Fritos?'},
			{question:'Why are the alphabets in the order that they are? Is it because it is a song?'},
		]))
.then(() => Question.bulkCreate([
  {question: ''},
  {question: ['question1', 'question2','question3', 'question4']},
], {validate: true}))
// if everything is correct, you should only have FOUR questions in your database
.catch((err) => console.log(err));
