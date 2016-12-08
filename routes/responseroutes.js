var express = require('express')
var app = express()
var Sequelize = require('sequelize')
var Response = require('../models/response')
var responseRoutes = express.Router()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));


const getAllResponses = (req,res)=>{
	Response.findAll({}).then(function(data){
		// order:"createdAt ASC"	
		// JSON.stringify(data)
		res.send(JSON.stringify(data))
	})
}

const createResponse = (req,res) =>{
	var choice = req.body.choice1
	var id = req.body.choice
	console.log(req.body)
	Response.create({
		choice: req.body.choice
		// QuestionId:id
	})
	res.send(req.body.response)
	
}



responseRoutes.route('/')
	.get(getAllResponses)
	.post(createResponse)



module.exports = responseRoutes