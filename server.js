var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/surveyapp');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static('public'));

// to see if sequelize connection worked
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));


//port app is listening on
sequelizeConnection.sync().then(function() {
	app.listen(3000)
});

app.use('/api', require('./api-routes'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '/views/index.html'))
});