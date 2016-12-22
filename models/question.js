var Sequelize = require('sequelize')
var Response = require('./response')
var sequelizeConnection = require('../sequelizeConnection')

// var sequelizeConnection = new Sequelize('postgres://bryanbethea@localhost:5432/surveyapp');

// sequelizeConnection.authenticate().then(()=>{
// 	console.log('THIS SHIT IS AUTHENTIC!')
// })

// sequelizeConnection.sync()

var Question = sequelizeConnection.define('question',{
	question: Sequelize.STRING(500),
	choice1: Sequelize.STRING(500),
	choice2: Sequelize.STRING(500),
	choice3: Sequelize.STRING(500),
	choice4: Sequelize.STRING(500),

})

Response.belongsTo(Question);


Question.belongsToMany(Response, { through: 'questionResponse'});
Response.belongsToMany(Question, { through: 'questionResponse'});


Question.sync()
module.exports = Question