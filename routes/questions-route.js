// HERE, WE ARE IMPORTING THE questionsRouter
const questionsRouter = require('express').Router();


// NOW HERE, WE PERFORM FUNCTIONS FOR THE QUESTIONS ROUTER
// GET ALL THE QUESTIONS-----------------------------------
const getQuestions = (req, res) => {
	res.send("Getting all the Questions...")
}

questionsRouter.route('/api/question')
    .get(getQuestions)



// CREATE A QUESTION----------------------------------------
// const createQuestion = (req, res) => {
// 	res.sed("Create a question")
// }

// questionsRouter.route('/api/question')
// 	.post(createQuestion)