var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize');
;
var sequelizeConnection = require('./db');

var Question = require('./models/question');
var Response = require('./models/response');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(express.static('public'))


sequelizeConnection.sync().then(function() {
	console.log('Sequelize connection successful')
  app.listen(3000)
})









// GET API endpoint to retrieve all Questions
// /api/question
app.get('/api/question', (req,res)=> {
	Question.findAll()
	.then((data)=>res.send(data))
})

///api/question POST create a Question 
app.post('/api/question', (req,res)=>{
	Question.create({
	  question: req.body.question,
	  choiceOne: req.body.one,
	  choiceTwo: req.body.two,
	  choiceThree: req.body.three,
	  choiceFour: req.body.four	  
  })
	.then((data)=>{res.send(data)})	
})




// /api/response GET retrieve all Responses
app.get('/api/response', (req,res)=> {
	Response.findAll({include: [Question]})
	.then((data)=>res.send(data))
})


// GET RESPONSES
app.post('/api/response', (req,res)=>{
	Response.create({
  	choice: req.body.choice,
  	questionId: req.body.id
  })
})








// retrieve all Questions BY ID
app.get('/api/question/:id',(req,res)=>{
	console.log("should get question")
	Question.findById(req.params.id)
	.then((data)=>res.send(data))
})





app.get('*/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

















