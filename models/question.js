var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');
var Response = require("./response");

var Question = sequelizeConnection.define('question',{
	question: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 250], notEmpty: true
		}
	},
	Choice1: {
    	type: Sequelize.STRING,
   },

   Choice2: {
		type: Sequelize.STRING,
   },

   Choice3: {
		type: Sequelize.STRING,
   },

   Choice4: {
     	type: Sequelize.STRING,
   }

});



module.exports = Question;
