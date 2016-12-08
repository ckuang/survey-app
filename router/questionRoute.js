const questionRoute = require('express').Router();
const Question = require('../models/question.js');

const createQuestion = (req, res) => {
	console.log('CREATE QUEST', req.body)
	Question.create({
		Question: req.body.Question,
		Choice1: req.body.Choice1,
		Choice2: req.body.Choice2,
		Choice3: req.body.Choice3,
		Choice4: req.body.Choice4
	})
	.then((data) => {
		res.send(data)
	})
}

const getQuestions = (req, res) => {
	Question.findAll()
	.then((data) => {
		res.send(data)
	})
}


//url is /api/question
questionRoute.route('/')
	.post(createQuestion)
	.get(getQuestions)

module.exports = questionRoute;