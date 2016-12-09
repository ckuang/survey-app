var express = require('express')
var app = express()
var router = express.Router()
var bodyparser = require('body-parser')
var path = require('path')
var Question = require('./models/question')
var Response = require('./models/response')
var sequelize = require('./db')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))



// MIDDLEWARE:
router.use(function(req, res, next) {
	console.log('Yipee')
	next()
});

// TEST ROUTER:
router.get('/', function(req, res){
	res.json({ message: 'hooray! welcome to our api!' })
});

// ROUTES:
router.route('/question')
	.get(function(req, res) {
		Question.findAll({

		})
		.then(function(data) {
			console.log('Find All Questions')
			res.json(data)
		})
		.catch(function(err) {
			console.log(err)
		})
	})

	.post(function(req,res) {
		Question.create({
			question: req.body.question,
			choiceOne: req.body.choiceOne,
			choiceTwo: req.body.choiceTwo,
			choiceThree: req.body.choiceThree,
			choiceFour: req.body.choiceFour 
		})
		.then(function(data) {
				console.log('Question Created')
				res.json(data)
		})
		.catch(function(err) {
			console.log(err)
		})
	})

router.route('/response')
	.post(function(req,res) {
		Response.create({
			choice: req.body.choice
		})
		.then(function(data) {
			console.log('Response created')
			res.json(data)
		})
		.catch(function(err) {
			console.log(err)
		})
	})
	.get(function(req, res) {
		Response.findAll({
			include: [ Question ]
		})
		.then(function(data) {
			console.log('Find All Responses')
			res.send(data)
		})
		.catch(function(err) {
			console.log(err)
		})
	})


app.use('/api', router);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelize.sync().then(function() {
  app.listen(7777)
})
