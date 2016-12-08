const Sequelize = require('sequelize'); // Importing sequelize database 
const sequelizeConnection = require('../db.js'); // Connecting it to the server that is running on 3000
const Response = require('../models/response-model.js'); // Importing the question-model 

Response.sync({force:true})
	.then(()=> Response.bulkCreate([
			{choice: 'open' || 'close'},
			{choice: 'yes' || 'no'},
			{choice: 'Cheetos' || 'Fritos'},
			{choice:'I believe'},
		]))
.then(() => Question.bulkCreate([
  {choice: ''},
  {choice: ['choice1', 'choice2','choice3', 'choice4']},
], {validate: true}))
// if everything is correct, you should only have FOUR questions in your database
.catch((err) => console.log(err));
