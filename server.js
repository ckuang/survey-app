var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 
var Response = require('response')
var Question = require('question')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

var sequelizeConnection = new Sequelize('postgres://craig@localhost:5432/surveyapp');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})


app.get('/api/question', function(req, res) {
  res.sendFile(path.join(__dirname, '/models/question.js'))
})

app.get('/api/response', function(req, res) {
  res.sedFile(path.join(__dirname, '/models/response.js'))
})

app.get('/api/question:id', function(req, res) {
  Song.findById(req.params.id).then((question) => {
    res.send(question)
  })
})

app.get('api/response:id', function(req, res) {
  Response.findById(req.params.id).then((question) => {
    res.send(question)
  })
})

app.post('question', function(req, res){
  Question.create({
    title: req.body.title
  }) .then((question) => {
    res.send(question)
  })
})

app.post('response', function(req, res ){
  Response.create({
    title: req.body.title
  }).then((response) => {
    res.send(response)
  })
})


