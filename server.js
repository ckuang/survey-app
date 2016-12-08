var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 
var sequelizeConnection = require('./db');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

//var sequelizeConnection = new Sequelize('postgres://Ambar@localhost:5432/surveyapp');

var Question = require('./models/question')
var Restponse = require('./models/response')







// GET API endpoint to retrieve all Questions
// /api/question
app.get('/api/response', function(req, resp){
	Question
	.findAll()
	.then(function(data){
		resp.send(data)
	})
})

app.post('/api/question', function(req, resp){
    Question
    .create({question: req.body.name })
    .then(function(){
        resp.send('question was created')
    })
})


// GET API endpoint to retrieve all Responses
// /api/response
app.get('/api/question', function(req, resp){
	Response
	.findAll()
	.then(function(data){
		resp.send(data)
	})
})


// POST API endpoint to create a Response
// /api/response
app.post('/api/response', function(req, resp){
	Response
	.create({Response: req.body.name})
	.then(function(){
		resp.send('response was created!')
	})
})




app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})


module.exports = sequelizeConnection;


