// EXPRESS
var express = require('express')
var app = express()

// SEQUELIZE
var Sequelize = require('sequelize') 
var sequelizeConnection = require('./db');

// MODELS
const Question = require("./models/question.js")
const Response = require("./models/response.js")

// BODYPARSER
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

// PATH
var path = require('path')

// serving up public (bundle files) folder 
app.use(express.static('public'))



// API ENDPOINTS

app.get("/questions", (req, res) => {
	Question.create()
	.then( allQs => res.send(allQs) )
})

app.post("/create", (req, res) => {
	Question.create()
	.then( newQ => res.send(newQ) )
})

app.get("/results", (req, res) => {
	Question.create()
	.then( allAs => res.send(allAs) )
})


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// CREATE TABLES
sequelizeConnection.sync()
.then(function() {
  app.listen(3000)
})
