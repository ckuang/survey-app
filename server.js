var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

var Question = require('./models/question');
var Response = require("./models/response");

app.use(bodyparser.urlencoded({ extended: false })); //was originally false
app.use(bodyparser.json())
app.use(express.static('public'))

//var sequelizeConnection = new Sequelize('postgres://Vanessa@localhost:5432/surveyapp');

// sequelizeConnection
// .authenticate()
// .then((err) => console.log('Sequelize connection successful'))
// .catch((err) => console.log('Unable to connect to the database:', err));

// GET API endpoint to retrieve all Questions
// /api/question
app.get('/api/questions', (req, res) => {
	
	Question.findAll()
	.then((data) => {
		let output = JSON.stringify(data)
			res.send(output)
	})
})

//was inside res.send(JSON.stringify(data))

// GET API endpoint to retrieve all Responses
// /api/response
app.get('/api/response', (req, res) => {
	Response.findAll()
	.then((data) => {
		let output = JSON.stringify(data)
			res.send(output)
	})
})

// POST API endpoint to create a Question
// /api/question
app.post('/api/question', (req, res) => {
	Question.create({
		question: req.body.question
	})
	.then(() => {
			res.send(req.body.question)
	})
})

// POST API endpoint to create a Response
// /api/response
app.post('/api/response', (req, res) => {
	Response.create({
		response: req.body.response
	})
	.then(() => {
			res.send(req.body.response)
	})
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})
