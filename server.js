var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')
var sequelizeConnection = require('./db')

var Question = require('./models/question');
var Response = require('./models/response');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

// var sequelizeConnection = new Sequelize('postgres://Carlos@localhost:5432/surveyapp');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})

app.get('/api/question', (req, res) => {
  Question.findAll()
    .then((data) => {
      res.send(data);
    })
})

app.get('/api/response', (req, res) => {
  Resonse.findAll()
    .then((data) => {
      res.send(data);
    })
})


app.post('/api/question', (req, res) => {
  Question.create({query: req.body.question})
  .then((data) => {
    res.send(data)
  })
})

app.post('/api/response', (req, res) => {
  Response.create({resp: resp.body.response})
  .then((data) =>{
    res.send(data)
  })
})
