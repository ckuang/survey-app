var router = require('express').Router()
var path = require('path')
var Question = require('../models/question.js')

router.get('/api/question', function(req, res) {
  Question.findAll().then(function(questions){
    res.send(Questions)
  })
})

router.post('/api/question', function(req, res){
  Question.create({
    question: req.body.question
  }).then(function (){
    res.send(data)
  })
})

module.exports = router