var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')
var sequelizeConnection = require('./db.js')
var Question = require('./models/question.js')
var Response = require('./models/response.js')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

app.get('/api/question', (req, res) => {
  Question.findAll()
  .then((data) => {
    res.send(data)
  })
})
app.get('/api/response', (req, res) => {
  Response.findAll()
  .then((data) => {
    res.send()
  })
})
app.post('/api/question', (req, res) => {
  Question.create({name: req.body.name})
  .then((data) => {
    res.send(req.body.name)
  })
})
app.post('/api/response', (req, res) => {
  Response.create({name: req.body.name})
  .then((data) => {
    res.send(req.body.name)
  })
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})
