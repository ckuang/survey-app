const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Response = require('../models/response');

//Artist.sync will create the artists table
Response.sync({force: true})
//add the following three Responses to the database:
.then(() => Response.bulkCreate([
  {response: 'R1'},
  {response: 'R2'},
  {response: 'R3'},
]))
//the following Responses should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Response.bulkCreate([
  {response: ''},
  {response: ['RR', 'RRR']},
], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
