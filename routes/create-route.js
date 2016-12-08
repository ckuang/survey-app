// HERE, WE ARE IMPORTING THE createRouter
const createRouter= require('express').Router();

// NOW HERE, WE PERFORM FUNCTIONS FOR THE CREATE ROUTER

// CREATE A QUESTION
const createQuestion = (req, res) => {
	res.send("Create a question")
}

createRouter.route('/api/question')
    .post(createQuestion)