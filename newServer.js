var express = require('express')
var app = express()
var router = express.Router()
var bodyparser = require('body-parser')
var Sequelize = require('sequelize') 
var sequelizeConnection = new Sequelize('postgres://Rabiya@localhost:5432/survey-app');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

var PORT = process.env.PORT || 4444;

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
	.post(function(req,res) {
		Question.create({
			where: {
				quest: req.body.quest,
				one: req.body.one,
				two: req.body.two,
				three: req.body.three,
				four: req.body.four
			}
		})
		.then(function(data) {
			res.send(data)
		})
		.catch(function(err) {
			console.log(err)
		})
	})

app.use('/api', router);

app.listen(PORT, () => console.log('Fuck this port #' + PORT))


