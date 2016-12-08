const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Response = require("./response");

var Question = sequelizeConnection.define('question', {
  question: {
    type: Sequelize.STRING
 },
 choice1: {
 	type: Sequelize.STRING
 },
 choice2: {
 	type: Sequelize.STRING
 },
 choice3: {
 	type: Sequelize.STRING
 },
 choice4: {
 	type: Sequelize.STRING
 }
});

//Question.hasMany(Response, {as: "question_response"}) not working

module.exports = Question;

// Defining the correct schema for the Question model
// Question: string
// Choice1: string
// Choice2: string
// Choice3: string
// Choice4: string


