var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')
var sequelizeConnection = require('./db.js')
var Question = require('./models/question.js')
var Response = require('./models/response.js')
Question.sync()
Response.sync()

//route path
const routes = require('./routes')
const questionRouteFile = routes.questionRouteFile;
const responseRouteFile = routes.responseRouteFile;




app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))



app.use('/api/question', (req,res)=>{
//checked to see if its connecting to the front 
	console.log('anything')
		Question.create({
		question: req.body.question
	})
		.then(data => res.send(data))
		.catch(error => res.send('error'))
})


app.use('/api/question', questionRouteFile)
app.use('/api/response', responseRouteFile)


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


