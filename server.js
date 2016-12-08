//Server
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var Sequelize = require('sequelize');
var sequelizeConnection = require('./db.js');



//Files 
const Question = require('./models/question-model.js');
const Response = require('./models/response-model.js');


app.use(express.static('public'))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

//--------->API ENDPOINTS STARTS HERE <---------

//This is where I am getting all of my questions 
app.get('/api/question', (req,res)=>{
	Question.findAll()
		.then((data)=>{
		console.log('Here are all of the questions', data);
		res.send(newData);
		}).catch((error)=>{
			console.log('Error!!',error);
			res.send(200);
		})
})
//This is where I am creating a Question 
app.post('/api/question', (req,res)=>{
	Question.create({where:{question:req.body.question}})
	.then((data)=>{
		console.log('New question created!', data)
		res.send(data);
	}).catch((error)=>{
		console.log('Error', error)
		res.send(200);
	})	
})
//This is where I am getting all of my responses 
app.get('/api/response', (req,res)=>{
	Response.findAll()
		.then((data)=>{
			console.log('Here are all of the answers', data);
			res.send(data);
		}).catch((error)=>{
			console.log('Error!!',error);
			res.send(200);
		})
	
})
//This is where I am creating a response 
app.post('/api/response', (req,res)=>{
	Response.create({where:{choice:req.body.choice}})
	.then((data)=>{
		console.log('New Response Created!', data);
		res.send(data);
	}).catch((error)=>{
		console.log('Error!!', error);
		res.send(200);
	})
	
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})



sequelizeConnection.sync().then(function() {
  app.listen(3000)
})
