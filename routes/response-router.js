const express = require('express');
const router = express.Router();
//Model
const Response = require('../models/response.js')

///////////////////
///FUNCTION////////
///////////////////
const createResponse = (req,res) => {
	Response.create({
		choice: req.body.choice
	})
		.then(data => res.json(data))
		.catch(error => console.log('error'))
}

const getResponses = (req,res) => {
	Response.findAll()
		.then(data => res.send(JSON.stringify(data)))
		.catch(error => console.log('error'))
}
///////////////////
////ROUTER/////////
///////////////////
router.route('/')
	.post(createResponse)
	.get(getResponses)

///////////////////
///EXPORT//////////
///////////////////
module.exports = router;