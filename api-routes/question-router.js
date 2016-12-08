var router = require("express").Router();
var Question = require("../models/question");

// GET API endpoint to retrieve all Questions

function getQuestions(req, res){
	Question
		.findAll({
			order: [['createdAt', 'ASC']]
		})
		.then((
			data) => {
				res.send(data)
		})
		.catch(function(err){
			console.log(err)
		})
}
// POST API endpoint to create a Question


function postQuestions(req, res){
	Question.create({
			question: req.body.question
		})
		.then((question) => {
			res.json(question)
		})
		.catch((err) => {
			console.log(err)
		})
	};

router.route('/')
	.get(getQuestions)
	.post(postQuestions)

module.exports = router;