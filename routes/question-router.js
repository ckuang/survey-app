const express = require('express');
const router = express.Router();
//Model
const Question = require('../models/question.js')

///////////////////
///FUNCTION////////
///////////////////
const createQuestion = (req,res) => {
	console.log('data ')
	Question.create({
		question: req.body.question
		choiceOne: req.body.questionchoiceOne,
		choiceTwo: req.body.questionchoiceTwo,
		choiceThree: req.body.questionchoiceThree,
		choiceFour: req.body.questionchoiceFour

	})
		.then(data => console.log(data))

}

const getQuestions = (req,res) => {
	Question.findAll()
		.then(data => res.json(JSON.stringify(data)))
		.catch(error => console.log('error'))
}
///////////////////
////ROUTER/////////
///////////////////
router.route('/')
	.post(createQuestion)
	.get(getQuestions)

///////////////////
///EXPORT//////////
///////////////////
module.exports = router;


