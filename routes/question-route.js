var express = require ("express");
var questionRouter  = express.Router();
var Question = require('../models/question.js');


questionRouter.get('/',(req,res)=>{
    question.findAll().then((questions)=>{
        res.send(questions)
    })
})

module.exports= questionRouter;
