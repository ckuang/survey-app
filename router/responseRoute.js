const responseRoute = require('express').Router();
const Response = require('../models/response');
const Question = require('../models/question');

const getResponses = (req, res) => {
	Response.findAll()
	.then((data) => {
		res.send(data)
	})
}

const postResponse = (req, res) => {
	console.log('POST RESPONSE', req.body)
	Response.create({
		Choice: req.body.Choice,
		questionId: req.body.questionId
	})
	.then((data) => {
		res.send(data)
	})
}

//url is /api/response
responseRoute.route('/')
	.get(getResponses)
	.post(postResponse)

module.exports = responseRoute;