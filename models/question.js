var Sequelize = require('sequelize');
var sequelizeConnection = require('../db');
var Response = require('./response');





const Question= sequelizeConnection.define('question',{
	 title: {
  	type: Sequelize.STRING(250)
  	
  },
  Choice1: {
  	type: Sequelize.STRING(50),   
  },
  Choice2: {
  	type: Sequelize.STRING(50),   
  },
  Choice3: {
  	type: Sequelize.STRING(50),   
  },
  Choice4: {
  	type: Sequelize.STRING(50),   
  }
});


module.exports = Question;





