var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')

//This imports the models for use
var Response = require('./models/response');
var Question = require('./models/question');


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

var sequelizeConnection = new Sequelize('postgres://Deeknows@localhost:5432/surveyapp');

//This handles an api GET request for questions
//QUESTIONS COMPONENT
app.get('/api/question', (req, res) => {
  Question.findAll()
  .then((questions) => {
    res.send(questions)
  })
})

//This handles an api POST request to create a new question
//CREATE COMPONENT
app.post('/api/question', (req, res) => {
  let info = req.body
  Question.create({
    question: info.question,
    choiceOne: info.one,
    choiceTwo: info.two,
    choiceThree: info.three,
    choiceFour: info.four
  })
  .then(() => {
    res.send('Question has been created')
  })
})

//This handles an api GET request that serves all responses to the page
//RESULT COMPONENT
app.get('/api/response', (req, res) => {
  Response.findAll({
    include: [{
      model: Question
    }]
  })
  .then((responses) => {
    res.send(responses)
  })
})

//This handles an api POST request to post responses to the database
//QUESTION COMPONENT
app.post('/api/response', (req, res) => {
  let question = req.body.id
  let choice = req.body.choice
  Response.create({
    choice: choice
  })
  .then((choice) => {
    choice.setQuestion(question)
    console.log('All responses have been saved to the database')
  })
})

//This hands over routing to the front
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000, () => {
    console.log('server running on port 3000')
  })
})
