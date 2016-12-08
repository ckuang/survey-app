const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Response = require('../models/response');


//Creating the "responses" table
Response.sync({force: true})
.then(() => sequelizeConnection.sync())
.then((data) => Response.create(
  {choice: '1', questionId: 1}
))
// .then((song) => {
//   //use an automatically created 'accessor' method (addGenres) to add the genres
//   song.addGenres([1, 3])
// })
.then(() => Response.create(
  {choice: 'c', questionId: 2}
))
// .then((song) => {
//   song.addGenres([2])
// })
.then(() => Response.create(
  {choice: '4', questionId: 3}
))
// .then((song) => {
//   song.addGenres([1])
// })


//the following responses should NOT be added:
.then(() => Response.bulkCreate([
  {choice: ''},
  {choice: ['2', 'b']},
], {validate: true}))
.catch((err) => console.log(err));