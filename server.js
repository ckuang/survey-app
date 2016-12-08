var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 

var Question = require('./models/question');
var Response = require('./models/response');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

var sequelizeConnection = new Sequelize('postgres://esmeralda@localhost:5432/surveyapp');

//////////////////////////////////////////////

//url: "/api/question", type: "POST", send ajax to create new question
app.post('/api/question', (req,res) => {
  Question.create({
    question:req.body.question,
    one:req.body.one,
    two:req.body.two,
    three:req.body.three,
    four:req.body.four
  })
  .then((data) => {
    console.log(data);
  })
})

// url: '/api/question', type: 'GET', etches all question

//////////////////////////////////////////////
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})

module.exports = sequelizeConnection;