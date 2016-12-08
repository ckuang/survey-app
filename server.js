var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 
var Question = require('./models/question');
var Response = require('./models/response');
const sequelizeConnection = require('./db');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())


app.listen(3000)

app.use(express.static('public'))


app.get('api/question',(req,res)=>{
  Question.findAll({include:[Response]}).then((questions)=>{res.send(questions)})
})

app.get('api/response',(req,res)=>{
    Response.findAll().then((responses)=>{res.send(responses)})
})

// app.post('api/response',(req,res)=>{
//     Response.findOrCreate({where:{
//         question: req.body.question,
//         choice1 : req.body.one,
//         choice2: req.body.two,
//         choice2: req.body.three,
//         choice2: req.body.four
// }}).then((response)=>{res.send(response)})
// })
// app.post('api/response',(req,res)=>{
//     Question.findOrCreate({where:{
//         choice : req.body.answer,
//
//     }}).then((question)=>{res.send(question)})
// })

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})



