// REQUIRE EVERYTHING
var express = require('express')
var app = express()
var path = require('path')
var Sequelize = require('sequelize') 

// THE BODY PARSER WHICH ALLOWS US TO DIG IN AND READ THE INFORMATION
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

var sequelizeConnection = new Sequelize('postgres://parthjhaveri@localhost:5432/surveyapp');

// THIS JOINS THE BUNDLE FOLDER WITH THE REST OF THE FILES
app.use(express.static(path.join(__dirname, '/front/bundle')));



///////////////////////////////////////////////////////////////////////
////////--| ALL MY ROUTES ARE IN A SEPARATE ROUTES FOLDER |-- /////////
///////////////////////////////////////////////////////////////////////



// FROM HERE, WE SET THE ROUTE PATHS. WHEN THE URL WILL SAY api/create, WE WILL USE createRouter FROM THE INDEX.JS FILE.
// WHEN THE URL IS api/questions, WE WILL USE questionsRouter FROM THE INDEX.JS FILE AS WELL.
// LIKEWISE, WHEN THE URL IS api/results, WE WILL USE resultsRouter FROM THE INDEX.JS FILE AS WELL.
app.use('/api/create', require('./routes/index').createRouter);
app.use('/api/questions/', require('./routes/index').questionsRouter)
app.use('/api/results/', require('./routes/index').resultsRouter)

// FOR EVERYTHING ELSE AFTER api/create, api/questions OR api/results, WE WILL USE THE INDEX.HTML FILE
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// LISTEN IN ON PORT 8000
sequelizeConnection.sync().then(function() {
  app.listen(8000)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});