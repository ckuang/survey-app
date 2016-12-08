var express = require('express')
var Sequelize = require('sequelize')
var Question = require('../models/question')
var questionRoutes = express.Router()
var bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.urlencoded({ extended: false }));





const getAllQuestions = (req,res)=>{
	Question.findAll({}).then(function(data){
		order:"createdAt ASC"	
		res.send(data)
	})
}


const createQuestions = (req,res) =>{
	// var ans = req.body.question
		// console.log(req.body)
		// console.log(req.body.one)
	Question.create({
		question: req.body.question,
		choice1:req.body.one,
		choice2:req.body.two,
		choice3:req.body.three,
		choice4:req.body.four
	})
	res.send(req.body)
	
}



questionRoutes.route('/')
	.get(getAllQuestions)
	.post(createQuestions)



module.exports = questionRoutes