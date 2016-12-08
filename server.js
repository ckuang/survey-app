var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

var sequelizeConnection = new Sequelize('postgres://darlenesterling@localhost:5432/surveyapp');

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})

sequelizeConnection
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// pp.use('/api/genres', require('./routes/index').genreRouter);

app.use('/api/question', require('./routes/question-route').questionRouter);
app.use('/api/response', require('./routes/response-route').responseRouter);
app.use('/api/question', require('./routes/question-route').questionRouter);
app.use('/api/response', require('./routes/response-route').responseRouter);
