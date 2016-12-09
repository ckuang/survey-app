const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//models
const Question = require('./models/question.js');
const Response = require('./models/response.js');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

//create question
app.post('/api/question', (req,res)=>{
  Question.create({
    question: req.body.question,
    choice1: req.body.choice1,
    choice2: req.body.choice2,
    choice3: req.body.choice3,
    choice4: req.body.choice4
  }).then(()=>{
    res.send('new question created')
  })
});
//question show
app.get('/api/question', (req,res)=>{
  Question.findAll().then((data)=>{
    res.send(data)
  })
});
//post answer
app.post('/api/response', (req,res)=>{
  Response.create({
    answer: req.body.answer,
    questionId: req.body.questionId
  }).then(()=>{
    res.send('new answer given')
  })
});

//get answer
app.get('/api/response', (req,res)=>{
  Response.findAll({
          include: [{
        model: Question}]
  }).then((data)=>{
    res.send(data)
  })
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(3000,()=>{console.log('listening to port 3000!')})
