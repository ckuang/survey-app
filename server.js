var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 
// var app = express.Router()
var questionRoutes = require('./routes/questionroutes')
var responseRoutes = require('./routes/responseroutes')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))
var sequelizeConnection = require('./sequelizeConnection')
sequelizeConnection.sync()

app.use('/api/question',questionRoutes)
app.use('/api/response',responseRoutes)

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })


app.use('/*', (req, res) => {res.sendFile(__dirname +'/views/index.html')});

sequelizeConnection.sync().then(function() {
  app.listen(3000)
})


// module.exports = sequelizeConnection
