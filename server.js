var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 

// var Question = require('./models/question.js')
// var Response = require('./models/response.js')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

var sequelizeConnection = new Sequelize('postgres://salinafu@localhost:5432/surveyapp');

var Question = sequelizeConnection.define("Question", {
	question: {
		type: Sequelize.STRING
	},
	choice1: {
		type: Sequelize.STRING
	},
	choice2: {
		type: Sequelize.STRING
	},
	choice3: {
		type: Sequelize.STRING
	},
	choice4: {
		type: Sequelize.STRING
	}
})


var Response = sequelizeConnection.define("Response", {
	choice: {
		type: Sequelize.STRING
	}	
})

Response.belongsToMany(Question, {as: 'Question', through: 'ResponsesToQuestions'}); //creates QuestionID?
Question.belongsToMany(Response, {as: 'Response', through: 'ResponsesToQuestions'}) //creates ResponseID

app.get('/api/question', function (req, res) {
	Question.findAll().then((data) => {
		res.send(data)
	})
})

app.get('/api/response', function (req, res) {
	Response.findAll().then((data) => {
		res.send(data)
	})
})

app.post('/api/question', function (req, res) {
	Question.create({
		question: req.body.question,
		choice1: req.body.choice1,
		choice2: req.body.choice2,
		choice3: req.body.choice3,
		choice4: req.body.choice4
	}).then(() => {
		res.send("Created a new question!")
	})
})

app.post('/api/response', function(req, res) {
	Response.create({
		choice: req.body.choice
	}).then(() => {
		res.send("Created a response!")
	})
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})