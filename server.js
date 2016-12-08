var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') ;
const sequelizeConnection = require('./db');
const Question = require('./models/question.js');
const Response = require('./models/response.js');





app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))



app.get('/api/question', function(req, resp){
    Question.findAll()
    .then(function(data){
	resp.send(data)
	})
	.catch(function(){
		resp.send('No data found')
	})
});

app.get('/api/response', function(req, resp){
	Response.findAll()
	.then(function(data){
	resp.send(data)
   })
	.catch(function(){
		resp.send('No data found')
	})
});

app.post('/api/question', function(req, resp){
	Question.create({
		question1: req.body.question , ans1: req.body.one , ans2: req.body.two,
        ans3: req.body.three, ans4: req.body.four})
	.then(function(){
    resp.send('Question created')
})
});

app.post('/api/response', function(req, resp){
	Response.create({ 
		resp: req.body.choice , id: req.body.id
	   })
	.then(function(){
		resp.send('Response Created')
	})

})




app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})
