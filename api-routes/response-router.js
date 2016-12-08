var router = require("express").Router();
var Response = require("../models/response");

// GET API endpoint to retrieve all Responses

function getResponses(req, res){
	Response
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
// POST API endpoint to create a Response


function postResponses(req, res){
	Response.create({
			answer: req.body.answer
		})
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			console.log(err)
		})
	};

router.route('/')
	.get(getResponses)
	.post(postResponses)

module.exports = router;