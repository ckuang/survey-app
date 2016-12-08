var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
var Sequelize = require('sequelize')
var sequelizeConnection = require('./db');
var Question = require('./models/question');
var Response = require('./models/response');




app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))




app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})



/*Express Server Routing

GET API endpoint to retrieve all Questions
/api/question
GET API endpoint to retrieve all Responses
/api/response
POST API endpoint to create a Question
/api/question
POST API endpoint to create a Response
/api/response */


app.get('/api/question', (req,res) => {
	Question.findAll()
    .then((data) => {
      res.send(data)
    })

});


app.get('/api/response', (req,res) => {
	Response.findAll()
    .then((data) => {
      res.send(data)
    })

});


app.post('/api/question', (req,res) =>{
	Question.create({ 
		title: req.body.title, 
		deadline: new Date() })
	.then(function(task) {
  		res.send(task);
     })

});


app.post('/api/response', (req,res) =>{
	Response.create({ 
		title: req.body.title, 
		deadline: new Date() })
	.then(function(task) {
  		res.send(task);
     })

});



















