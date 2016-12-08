var express = require "express";
var responseRouter  = express.Router();
var Question = require('../models/question.js');


responseRouter.get('/',(req,res)=>{
    response.findAll().then((responses)=>{
        res.send(responses)
    })
})

module.exports= responseRouter;
