var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 
const sequelizeConnection = require('./db');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

//var sequelizeConnection = new Sequelize('postgres://lisa@localhost:5432/surveyapp');

app.use('/api', require('./router'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})