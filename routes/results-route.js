// HERE, WE ARE IMPORTING THE resultsRouter
const resultsRouter = require('express').Router();

// NOW HERE, WE PERFORM FUNCTIONS FOR THE RESULTS ROUTER

// SHOW THE RESULTS/ ANSWERS-----------------------
const getAnswer = (req, res) => {
	res.send("Get answers")
}

resultsRouter.route('/api/response')
    .get(getAnswer)


// POST/ CREATE A RESPONSE-----------------------

const postAnswer = (req, res) => {
	res.send("Post Answer")
}

resultsRouter.route('/api/response')
	.post(postAnswer)

	