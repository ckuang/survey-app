// EXPRESS
var express = require('express')
var app = express()

// SEQUELIZE
var Sequelize = require('sequelize') 
var sequelizeConnection = require('./db');

// MODELS
const Question = require("./models/question.js")
const Response = require("./models/response.js")

// BODYPARSER
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

// PATH
var path = require('path')

// serving up public (bundle files) folder 
app.use(express.static('public'))



// API ENDPOINTS
// /api/question GET API endpoint to retrieve all Questions
app.get("/api/question", (req, res) => {
	Question.findAll()
	.then( allQs => res.send(allQs) )
})

// /api/response GET API endpoint to retrieve all Responses
app.get("/api/response", (req, res) => {
	Response.findAll()
	.then( allRs => res.send(allRs) )
})

// /api/question POST API endpoint to create a Question
app.post("/api/question", (req, res) => {
	Question.create(
		{ question: req.body.question,
			choice1: req.body.choice1,
			choice2: req.body.choice2,
			choice3: req.body.choice3,
			choice4: req.body.choice4,
		}
	)
	.then( newQ => res.send("added new question: " + req.body.question) )
})

// /api/response POST API endpoint to create a Response
app.post("/api/response", (req, res) => {
	Question.create(
		{ response: req.body.response }
	)
	.then( newR => res.send("added new response: " + req.body.response) )
})




// const postSong = (req,res)=>{
//   var body = req.body;
  
//   Artist.findOrCreate({ // returns array of objects
//     where: {name: body.name} // 1st Body field in postman
//   })
//   .then( artistInfo => { 
//       // console.log("artistInfo:", artistInfo, "\n artistId:", artistInfo[0].dataValues.id);
//       // res.send(artistInfo)
//       Song.create({ // creates an object, not array of objects
//         title: body.title,  // 2nd Body field in postman
//         youtube_url: body.youtube_url, // 3rd Body field in postman
//         artistId: artistInfo[0].dataValues.id
//       })
//       .then( songInfo => {
//         // console.log("songInfo:", songInfo);
//         Genre.findOrCreate({
//           where: {title: body.genre}
//         }) // nested inside songInfo promise 
//         .then( genreInfo => {
//           // console.log(genreInfo);
//           songInfo.addGenres([genreInfo[0].dataValues.id]) // connecting song object to genre ID
//         })
//         .then( () =>
//           // console.log(songInfo)
//           res.send('New song added.\n ID: ' + songInfo.dataValues.id
//             + '\nTitle: ' + body.title
//             + '\n Artist: ' + body.name
//             + '\n Genre: ' + body.genre 
//             + '\n youtube_url: ' + body.youtube_url)
//         )
//       })
//     } 
//   )
  
// };






// 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// CREATE TABLES
sequelizeConnection.sync()
.then(function() {
  app.listen(3000)
})
